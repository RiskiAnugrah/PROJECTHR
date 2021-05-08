
//Variable
var DariSelectedItem;
var MenujuSelectedItem;
var ds_tipe_perjalanan = new kendo.data.DataSource({
    type: "json",
    transport: {
        read: {
            url: $("#urlPath").val() + "/Referensi/listPerjalanan",
            contentType: "application/json",
            type: "POST"
        },
        parameterMap: function (data, operation) {
            if (operation == "read") {
                data.s_find = "";
                //data.s_tipe = 'KODE';
            }
            return kendo.stringify(data)
        }
    },
    schema: {
        data: "Data",
        total: "Total"
    }
});


var ds_hub_keluarga = new kendo.data.DataSource({
    type: "json",
    transport: {
        read: {
            url: $("#urlPath").val() + "/Referensi/listPenumpang",
            contentType: "application/json",
            type: "POST"
        },
        parameterMap: function (data, operation) {
            if (operation == "read") {
                data.s_find = "";
                //data.s_tipe = 'KODE';
            }
            return kendo.stringify(data)
        }
    },
    schema: {
        data: "Data",
        total: "Total"
    }
});

var ds_title = new kendo.data.DataSource({
    type: "json",
    transport: {
        read: {
            url: $("#urlPath").val() + "/Referensi/listTitle",
            contentType: "application/json",
            type: "POST"
        },
        parameterMap: function (data, operation) {
            if (operation == "read") {
                data.s_find = "";
                //data.s_tipe = 'KODE';
            }
            return kendo.stringify(data)
        }
    },
    schema: {
        data: "Data",
        total: "Total"
    }
});

var ds_Durasi = new kendo.data.DataSource({
    type: "json",
    transport: {
        read: {
            url: $("#urlPath").val() + "/Referensi/listDurasi",
            contentType: "application/json",
            type: "POST"
        },
        parameterMap: function (data, operation) {
            if (operation == "read") {
                data.s_find = "";
                //data.s_tipe = 'KODE';
            }
            return kendo.stringify(data)
        }
    },
    schema: {
        data: "Data",
        total: "Total"
    }
});

var ds_layanan = new kendo.data.DataSource({
    type: "json",
    transport: {
        read: {
            url: $("#urlPath").val() + "/Referensi/listLayanan",
            contentType: "application/json",
            type: "POST"
        },
        parameterMap: function (data, operation) {
            if (operation == "read") {
                data.s_find = "";
                //data.s_tipe = 'KODE';
            }
            return kendo.stringify(data)
        }
    },
    schema: {
        data: "Data",
        total: "Total"
    }
});

var ds_bandara = new kendo.data.DataSource({
    type: "json",
    transport: {
        read: {
            url: $("#urlPath").val() + "/Referensi/listBandara",
            contentType: "application/json",
            type: "POST"
        },
        parameterMap: function (data, operation) {
            if (operation == "read") {
                data.s_find = "";
                //data.s_tipe = 'KODE';
            }
            return kendo.stringify(data)
        }
    },
    schema: {
        data: "Data",
        total: "Total"
    }
});
////Event of Variable
//even handler

$(document).ready(function () {
    
    $("#txtTipePerjalanan").kendoDropDownList({
        dataSource: ds_tipe_perjalanan,
        dataTextField: "PERJALANAN_DESC",
        dataValueField: "PERJALANAN_KODE",
        optionLabel: "Pilih Perjalanan",
        index: 0
    });




    $("#txtKetWaktu").kendoDropDownList({
        dataSource: ds_Durasi,
        dataTextField: "DURASI_DESC",
        dataValueField: "DURASI_CODE",
        optionLabel: "Pilih Durasi",
        index: 0
    });

    $("#txtLayanan").kendoDropDownList({
        dataSource: ds_layanan,
        dataTextField: "LAYANAN_DESC",
        dataValueField: "LAYANAN_CODE",
        optionLabel: "Pilih Layanan",
        index: 0
    });

    $("#txtTanggal").kendoDatePicker({
        format: "yyyy-MM-dd",
        value: new Date()
        //min: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    });

    $("#txtDari").width(250).kendoAutoComplete({
        dataTextField: "BANDARA_DESC",
        dataValueField: "BANDARA_KODE",
        dataSource: ds_bandara,
        minLength: 2,
        template: '<span> #= BANDARA_DESC #</span>',
        //template: "#= EGI #",
        filter: "contains",
        select: function (e) {
            var dataItem = this.dataItem(e.item.index());

            DariSelectedItem = dataItem.BANDARA_KODE;

            //alert(DariSelectedItem);

        }
    });

    $("#txtMenuju").width(250).kendoAutoComplete({
        dataTextField: "BANDARA_DESC",
        dataValueField: "BANDARA_KODE",
        dataSource: ds_bandara,
        minLength: 2,
        template: '<span> #= BANDARA_DESC #</span>',
        //template: "#= EGI #",
        filter: "contains",
        select: function (e) {
            var dataItem = this.dataItem(e.item.index());

            MenujuSelectedItem = dataItem.BANDARA_KODE;

        }
    });

    $("#txtNoKontak").kendoNumericTextBox({
        format: "0",
        decimals: 0,
        min: 0
    });

    fn_load_grid();
    
    
});









function fn_load_grid() {
    $("#dv_grid").kendoGrid({
        dataSource: {
            batch: true,
            transport: {
                read: {
                    url: $("#urlPath").val() + "/Tiket/issuedTiket",
                    contentType: "application/json",
                    type: "POST"
                },
                parameterMap: function (data, operation) {
                    if (operation == "read") {
                        data.TIKET_TAKE_UP_DOK = ""+ $("#id_dok").val() +"";
                        //data.s_tipe = 'KODE';
                    } else if (operation == "create") {

                    } else if (operation == "update") {

                    } else if (operation == "destroy") {

                    }
                    return kendo.stringify(data)
                }
            },
            error: function (e) {
                if (e.errors) {
                    alert(e.errors);
                    this.cancelChanges();
                }
            },
            schema: {
                data: "Data",
                total: "Total",
                model: {
                    id: "TIKET_ROW_ID",
                    fields: {
                        TITLE_CODE: { type: "string", editable: false },
                        TIKET_NAMA: { type: "string", editable: false },
                        TIKET_NO_HP: { type: "string", editable: false },
                        TIKET_TANGGAL: { type: "string", editable: false },
                        DARI_LOKASI: { type: "string", editable: false },
                        DARI_KODE: { type: "string", editable: false },
                        TIKET_NO_HP: { type: "string", editable: false },
                        MENUJU_LOKASI: { type: "string", editable: false },
                        MENUJU_KODE: { type: "string", editable: false },
                        TIKET_TIME: { type: "string", editable: false },
                        TIKET_BIAYA: { type: "string", editable: false },
                        TIKET_TAKE_UP_DOK: { type: "string", editable: false },
                        TIKET_CODE_BOOKING: { type: "string", editable: false },
                        MASKAPAI_DESC: { type: "string", editable: false },
                        TIKET_IS_RESCHEDULE: { type: "string", editable: false },
                    }
                }

            },
            pageSize: 100,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: false,
            

        },
        height: 600,
        filterable: true,
        sortable: true,
        editable: "inline",
        selectable: "multiple",
        pageable: {
            refresh: true,
            buttonCount: 10,
            input: true,
            pageSizes: [50, 100, 200, 300, 500, 1000, 100000],
            info: true,
            messages: {
            }
        },
        // toolbar: [{ text: "View", click: addIssue }],
        columns: [
            


          //{
          //   // field: "PENUMPANG_DESC",
          //    //title: "<center>TIPE PENUMPANG</center>",
          //    width: 10,
          //    template: '<div style="text-align:center;"><input type="checkbox"  class="chkbx" /></div>',
          //    headerTemplate: '<div style="text-align:center;"><input type="checkbox" id="SelectAll" /></div>'
          //},
          { command: [{ text: "RESCHEDULE", click: cufn_reschedule }, { text: " BATALKAN ", click: cufn_batalkan }], width: 30 },
          {
              field: "TITLE_CODE",
              title: "<center>TITLE</center>",
              width: 20

          },
          {
              field: "TIKET_NAMA",
              title: "<center>NAMA</center>",
              width: 55

          },
          {
              field: "TIKET_TANGGAL",
              title: "<center>TANGGAL</center>",
              width: 40,
              template: '<div style="text-align:center;">#= TIKET_TANGGAL #</div>'
          },
          {
              field: "DARI_LOKASI",
              title: "<center>DARI</center>",
              width: 30,
              template: '<div style="text-align:center;">#= DARI_LOKASI #</div>'
          },
          {
              field: "MENUJU_LOKASI",
              title: "<center>MENUJU</center>",
              width: 30,
              template: '<div style="text-align:center;">#= MENUJU_LOKASI #</div>'
          },
               {
                   field: "TIKET_TIME",
                   title: "<center>JAM</center>",
                   width: 20,
                   template: '<div style="text-align:center;">#= TIKET_TIME #</div>'
               },
           {
               field: "MASKAPAI_DESC",
               title: "<center>PESAWAT</center>",
               width: 30,
               template: '<div style="text-align:center;">#= MASKAPAI_DESC #</div>'
           },
      
           {
               field: "TIKET_BIAYA",
               title: "<center>HARGA</center>",
               width: 20,
               template: '<div style="text-align:center;">#= TIKET_BIAYA #</div>'
           },
            {
                field: "TIKET_CODE_BOOKING",
                title: "<center>KODE</center>",
                width: 20,
                template: '<div style="text-align:center;">#= TIKET_CODE_BOOKING #</div>'
            },
             {
                 field: "TIKET_IS_RESCHEDULE",
                 title: "<center>RESCHEDULE</center>",
                 width: 25,
                 values: [{ text: '-', value: null }, { text: 'RESCHEDULE', value: "1" }],
                 
             }



        ]
    });
}



function cufn_reschedule(e) {
    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
    var rowid = dataItem.TIKET_ROW_ID;
    document.getElementById("tiket_row_id").value = rowid;
    document.getElementById("txtTitle").value = dataItem.TITLE_CODE;
    document.getElementById("txtNamaPenumpang").value = dataItem.TIKET_NAMA;
    document.getElementById("txtTanggal").value = dataItem.TIKET_TANGGAL;
    $("#txtNoKontak").data("kendoNumericTextBox").value(dataItem.TIKET_NO_HP)
    document.getElementById("txtDari").value = dataItem.DARI_KODE;
    document.getElementById("txtMenuju").value = dataItem.MENUJU_KODE;

    
    //var win = $("#dv_add").data("kendoWindow");
    //win.title(s_data);
    document.getElementById("dv_add").style.display = 'block';
    document.getElementById("dv_grid").style.display = 'none';
  
  

    

}

function submit_reschedule() {
   
    bootbox.confirm({
        message: "Yakin reschedule tiket??",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {


            //res = result;

            if (
        result == true
       ) {
                if (DariSelectedItem == null || MenujuSelectedItem == null) {
                    bootbox.alert("Anda harus konfirmasi ulang kolom dari dan menuju")
                }
                else { 
                var s_data = {
                    TIKET_ROW_ID: document.getElementById("tiket_row_id").value,
                    TITLE_CODE : document.getElementById("txtTitle").value,
                    TIKET_NAMA : document.getElementById("txtNamaPenumpang").value,
                    TIKET_TANGGAL: $("#txtTanggal").val().replace("-", "").replace("-", ""),
                    TIKET_NO_HP: $("#txtNoKontak").data("kendoNumericTextBox").value(),
                    DARI_KODE: DariSelectedItem,
                    MENUJU_KODE: MenujuSelectedItem,
                    DURASI_KODE:$("#txtKetWaktu").data("kendoDropDownList").value(),
                    LAYANAN_CODE:$("#txtLayanan").data("kendoDropDownList").value()
                 
                }

                $.ajax({
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(s_data),
                    url: $("#urlPath").val() + "/TIKET/reschedule",

                    success: function (response) {
                        if (response.status == true) {
                            bootbox.alert({
                                message: response.remarks,
                                size: 'small',
                                className: 'bb-alternate-modal',
                                callback: function (result) {
                                    document.getElementById("dv_add").style.display = 'none';
                                    document.getElementById("dv_grid").style.display = 'block';
                                    fn_load_grid();
                                }
                            });

                        }
                        else {
                            bootbox.alert(response.remarks);
                        }
                    }

                });

            }


            }
        }

    });

    //bootbox.alert(dataItem.TIKET_ROW_ID);

}

function batal_reshcedule() {
    document.getElementById("dv_add").style.display = 'none';
    document.getElementById("dv_grid").style.display = 'block';
}

function cufn_batalkan(e) {
    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
    bootbox.confirm({
        message: "Yakin batalkan tiket??",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {


            //res = result;

            if (
        result == true
       ) {


                var kode = $("#id_dok").val();
                var i_cls_data = {
                    TIKET_ROW_ID: dataItem.TIKET_ROW_ID,
                }
                $.ajax({
                    url: $("#urlPath").val() + "/Tiket/updateTiketBatalkan",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(i_cls_data),
                    success: function (data) {

                        bootbox.alert({
                            message: data,
                            size: 'small',
                            className: 'bb-alternate-modal',
                            callback: function (result) {
                                fn_load_grid();
                            }
                        });


                    },
                    error: function (jqXHR, textStatus, errorThrow) {
                        alert(textStatus);
                    }
                });

            }



        }

    });


       
}

function settingHubKeluarga(tipe) {

    if (tipe == 1) {
        $("#txtHubKeluarga").kendoDropDownList({
            dataSource: ds_hub_keluarga,
            dataTextField: "PENUMPANG_DESC",
            dataValueField: "PENUMPANG_KODE",
            optionLabel: "Pilih Hub Keluarga",
            index: 0,
            change: function (e) {
                if ($("#txtHubKeluarga").data("kendoDropDownList").value() == 'EMP') {
                    settingTanggal(1);
                    $('#txtNamaPenumpang').val($("#lblNama").html());
                } else {
                    settingTanggal(0);
                    $('#txtNamaPenumpang').val("");
                }
            }
        });
    } else {
        $("#txtHubKeluarga").kendoDropDownList({
            dataSource: [
                { "PENUMPANG_KODE": "EMP", "PENUMPANG_DESC": "EMPLOYEE" }
            ],
            dataTextField: "PENUMPANG_DESC",
            dataValueField: "PENUMPANG_KODE",
            optionLabel: "Pilih Hub Keluarga",
            index: 0,
            change: function (e) {
                //alert($("#txtHubKeluarga").data("kendoDropDownList").value());
                if ($("#txtHubKeluarga").data("kendoDropDownList").value() == 'EMP') {
                    settingTanggal(1);
                    $('#txtNamaPenumpang').val($("#lblNama").html());
                } else {
                    settingTanggal(0);
                    $('#txtNamaPenumpang').val("");
                }
            }
        });
    }

}






////Event of Function




