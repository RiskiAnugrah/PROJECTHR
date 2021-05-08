
//Variable

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


var ds_layananNGA = new kendo.data.DataSource({
    type: "json",
    transport: {
        read: {
            url: $("#urlPath").val() + "/Referensi/listLayanan",
            contentType: "application/json",
            type: "POST"
        },
        parameterMap: function (data, operation) {
            if (operation == "read") {
                data.s_find = "NGA";
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



var ViewModelRequest = new kendo.data.ObservableObject({
    REQ_ROW_ID: "",
    REQ_KODE: "",
    REQ_TYPE: "",
    REQ_NRP: "",
    REQ_NAMA: "",
    REQ_TGL_AWAL: "",
    REQ_TGL_AKHIR: "",
    REQ_DEPT_CODE: "",
    REQ_IS_FAMILY: "",
    REQ_INPUT_DATETIME: "",
    REQ_INPUT_BY: "",
    REQ_STATUS: ""
});


var ViewModelTiket = new kendo.data.ObservableObject({
    TIKET_ROW_ID : "",
    REQ_ROW_ID : "",
    PENUMPANG_TIPE : "",
    TIKET_TIPE_PERJALANAN : "",
    TITLE_CODE : "",
    TIKET_NAMA : "",
    TIKET_NO_HP : "",
    TIKET_TANGGAL : "",
    DARI_KODE : "",
    MENUJU_KODE : "",
    DURASI_KODE : "",
    TIKET_TIME : "",
    LAYANAN_CODE : "",
    MASKAPAI_KODE : "",
    TIKET_KELAS : "",
    TIKET_BIAYA : "",
    TIKET_TAKE_UP_DOK : "",
    TIKET_TAKE_UP_BY : "",
    TIKET_TAKE_UP_DATETIME : "",
    TIKET_CODE_BOOKING : "",
    TIKET_ISSUED_BY : "",
    TIKET_ISSUED_DATETIME : "",
    TIKET_BATAL_BY : "",
    TIKET_BATAL_DATETIME : "",
    TIKET_IS_RESCHEDULE : "",
    TIKET_CODE_RESCHEDULE: ""
});

var DariSelectedItem;
var DariText;
var MenujuSelectedItem;
var MenujuText;
var tempdari = DariSelectedItem;
var tempmenuju = MenujuSelectedItem;
var temtxtdari = DariText;
var temtxtmenuju = MenujuText;





////Event of Variable
//even handler



$(document).ready(function () {

    

    fn_load_request($('#id_dok').val());

    $("#txtTipePerjalanan").kendoDropDownList({
        dataSource: ds_tipe_perjalanan,
        dataTextField: "PERJALANAN_DESC",
        dataValueField: "PERJALANAN_KODE",
        optionLabel: "Pilih Perjalanan",
        index: 0
    });

    

    $("#txtTitle").kendoDropDownList({
        dataSource: ds_title,
        dataTextField: "TITLE_DESC",
        dataValueField: "TITLE_CODE",
        optionLabel: "Pilih Title",
        index: 0
    });

    $("#txtKetWaktu").kendoDropDownList({
        dataSource: ds_Durasi,
        dataTextField: "DURASI_DESC",
        dataValueField: "DURASI_CODE",
        optionLabel: "Pilih Durasi",
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
            DariText = dataItem.BANDARA_DESC;
            DariSelectedItem = dataItem.BANDARA_KODE;
            tempdari = DariSelectedItem;
            temtxtdari = DariText;
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
            MenujuText = dataItem.BANDARA_DESC;
            
            MenujuSelectedItem = dataItem.BANDARA_KODE;
            tempmenuju = MenujuSelectedItem;
            temtxtmenuju = MenujuText;

        }
    });

    $("#txtNoKontak").kendoNumericTextBox({
        format: "0",
        decimals: 0,
        min: 0
    });

    //$("#txtTanggal").disabled() = true;

   
    fnLoadSurat();

   
   
});

function deleteItem_onClick(e) {

    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));

    ViewModelTiket.TIKET_ROW_ID = dataItem.TIKET_ROW_ID;

    
    //if(confirm("Yakin menghapus data??")){
        
    //    $.ajax({
    //        url: $("#urlPath").val() + "/Tiket/deleteTiket",
    //        type: "POST",
    //        contentType: "application/json",
    //        data: JSON.stringify({ s_data: ViewModelTiket }),
    //        success: function (data) {
                

    //            bootbox.alert({
    //                message: data,
    //                size: 'small',
    //                className: 'bb-alternate-modal',
    //                callback: function (result) {
    //                    $("#dv_grid").data("kendoGrid").dataSource.read();
    //                }
    //            });


                
    //        },
    //        error: function (jqXHR, textStatus, errorThrow) {
    //            alert(textStatus);
    //        }
    //    });

    //}

    bootbox.confirm({
        message: "Yakin menghapus data??",
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

               
                $.ajax({
                    url: $("#urlPath").val() + "/Tiket/deleteTiket",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ s_data: ViewModelTiket }),
                    success: function (data) {


                        bootbox.alert({
                            message: data,
                            size: 'small',
                            className: 'bb-alternate-modal',
                            callback: function (result) {
                                $("#dv_grid").data("kendoGrid").dataSource.read();
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

function btn_simpan_onclick() {
    //alert('Masuk');
    window.parent.$("#dv_modal").data("kendoWindow").close();
}


function btnSwitchOnCLick() {
      
        DariText = temtxtmenuju;
        MenujuText = temtxtdari;
        document.getElementById("txtMenuju").value = MenujuText;
        document.getElementById("txtDari").value = DariText;
       
        MenujuSelectedItem = tempdari;
        DariSelectedItem = tempmenuju;

        tempdari = DariSelectedItem;
        tempmenuju = MenujuSelectedItem;
        temtxtdari = DariText;
        temtxtmenuju = MenujuText;

    
}

function btn_submit_onclick() {
    //alert('Masuk');

    var grid = $("#dv_grid").data("kendoGrid");
    grid.dataSource.read();
    var count = grid.dataSource.total();

    if(count == 0){
        alert("Belum ada tiket yang diinput..!!!");
    } else {


        //if (confirm("Yakin Submit Request \n Data tiket tidak bisa di rubah kembali...")) {
        //    $.ajax({
        //        url: $("#urlPath").val() + "/Request/updateStatusRequest",
        //        type: "POST",
        //        contentType: "application/json",
        //        data: JSON.stringify({ s_rowID: $("#row_id").val() }),
        //        success: function (data) {
        //            alert(data);
        //            window.parent.$("#dv_modal").data("kendoWindow").close();
        //        },
        //        error: function (jqXHR, textStatus, errorThrow) {
        //            alert(textStatus);
        //        }
        //    });
        //}


        bootbox.confirm({
            message: "Yakin Submit Request \n Data tiket tidak bisa di rubah kembali...",
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

                if (result == true) {

                    $.ajax({
                                url: $("#urlPath").val() + "/Request/updateStatusRequest",
                                type: "POST",
                                contentType: "application/json",
                                data: JSON.stringify({ s_rowID: $("#row_id").val() }),
                                success: function (data) {
                                    //alert(data);
                                    bootbox.alert({
                                        message: data,
                                        size: 'small',
                                        className: 'bb-alternate-modal',
                                        callback: function (result) {
                                            window.parent.$("#dv_modal").data("kendoWindow").close();
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


    

    
    
    
}

function btn_tambah_onclick() {
   
    ViewModelTiket.TIKET_TIPE_PERJALANAN = $("#txtTipePerjalanan").data("kendoDropDownList").value();
    ViewModelTiket.PENUMPANG_TIPE = $("#txtHubKeluarga").data("kendoDropDownList").value();
    ViewModelTiket.TITLE_CODE = $("#txtTitle").data("kendoDropDownList").value();
    ViewModelTiket.TIKET_NAMA = $("#txtNamaPenumpang").val();
    ViewModelTiket.TIKET_NO_HP = $("#txtNoKontak").val();
    ViewModelTiket.TIKET_TANGGAL = $("#txtTanggal").val().replace("-", "").replace("-", "");
    ViewModelTiket.DARI_KODE = DariSelectedItem;
    ViewModelTiket.MENUJU_KODE = MenujuSelectedItem;
    ViewModelTiket.DURASI_KODE = $("#txtKetWaktu").data("kendoDropDownList").value();
    ViewModelTiket.LAYANAN_CODE = $("#txtLayanan").data("kendoDropDownList").value();
    ViewModelTiket.REQ_ROW_ID = $("#req_row_id").val();

    if (ViewModelTiket.TIKET_TIPE_PERJALANAN.length == 0 ||
        ViewModelTiket.PENUMPANG_TIPE.length == 0 ||
        ViewModelTiket.TITLE_CODE.length == 0 ||
        ViewModelTiket.TIKET_NAMA.length == 0 ||
        ViewModelTiket.TIKET_NO_HP.length == 0 ||
        ViewModelTiket.TIKET_TANGGAL.length == 0 ||
        ViewModelTiket.DARI_KODE.length == 0 ||
        ViewModelTiket.MENUJU_KODE.length == 0 ||
        ViewModelTiket.DURASI_KODE.length == 0 ||
        ViewModelTiket.LAYANAN_CODE.length == 0
        ) {

        alert("Isikan Form Isian Tiket dengan benar !!!");

    } else {
        
        

        $.ajax({
            url: $("#urlPath").val() + "/Tiket/validasi",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ s_data: ViewModelTiket }),
            success: function (data) {
               
                if (data > 0) {
             
                    bootbox.confirm({
                        message: "Tiket dengan nama dan tipe perjalanan yang sama sudah ada, yakin ingin melanjutkan?",
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

                            if (result == true) {
                                $.ajax({
                                    url: $("#urlPath").val() + "/Tiket/insertTiket",
                                    type: "POST",
                                    contentType: "application/json",
                                    data: JSON.stringify({ s_data: ViewModelTiket }),
                                    success: function (data) {

                                        bootbox.alert({
                                            message: data,
                                            size: 'small',
                                            className: 'bb-alternate-modal',
                                            callback: function (result) {
                                                $("#dv_grid").data("kendoGrid").dataSource.read();
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
                else {
                    $.ajax({
                        url: $("#urlPath").val() + "/Tiket/insertTiket",
                        type: "POST",
                        contentType: "application/json",
                        data: JSON.stringify({ s_data: ViewModelTiket }),
                        success: function (data) {

                            bootbox.alert({
                                message: data,
                                size: 'small',
                                className: 'bb-alternate-modal',
                                callback: function (result) {
                                    $("#dv_grid").data("kendoGrid").dataSource.read();
                                }
                            });


                        },
                        error: function (jqXHR, textStatus, errorThrow) {
                            alert(textStatus);
                        }
                    });

              
                }


            },
            error: function (jqXHR, textStatus, errorThrow) {
                alert(textStatus);
            }
        });

       



      
    }





}

function btn_cancel_onClick() {

    ViewModelRequest.REQ_ROW_ID = $("#req_row_id").val();


    ViewModelTiket.REQ_ROW_ID = $("#req_row_id").val();

    //if ( confirm("Yakin Akan Membatalakn Request \n Semua Tiket juga akan ikut terhapus") ) {

        

    //}

    bootbox.confirm({
        message: "Yakin Akan Membatalakn Request, Semua Tiket juga akan ikut terhapus",
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

            if (result == true ) {

                //for (var i = 0; i <= selected.length - 1; i++) {
                //    alert(selected[i]);
                //}

                $.ajax({
                    url: $("#urlPath").val() + "/Request/deleteCancelRequest",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ s_dataReq: ViewModelRequest, s_dataTiket: ViewModelTiket }),
                    success: function (data) {
                        //alert(data);

                        bootbox.alert({
                            message: data,
                            size: 'small',
                            className: 'bb-alternate-modal',
                            callback: function (result) {
                                window.parent.$("#dv_modal").data("kendoWindow").close();
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


//// end of Event Handler

//Function



function fnLoadSurat() {

    if ($("#dv_grid").data().kendoGrid != null) {
        $("#dv_grid").data().kendoGrid.destroy();
        $("#dv_grid").empty();
    }

    $("#dv_grid").kendoGrid({
        dataSource: {
            batch: true,
            transport: {
                read: {
                    url: $("#urlPath").val() + "/Tiket/listTiket",
                    contentType: "application/json",
                    type: "POST"
                },
                parameterMap: function (data, operation) {
                    if (operation == "read") {
                        data.s_find = $("#id_dok").val();
                        //data.s_tipe = 'KODE';
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
                        TIKET_NAMA: { type: "string", editable: false },
                        PENUMPANG_DESC: { type: "string", editable: false },
                        TIKET_TANGGAL: { type: "string", editable: false },
                        DARI_LOKASI: { type: "string", editable: false },
                        MENUJU_LOKASI: { type: "string", editable: false },
                        DURASI_KODE: { type: "string", editable: false },
                        DURASI_DESC: { type: "string", editable: false },
                        LAYANAN_DESC: { type: "string", editable: false }                       
                    }
                }

            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: false,
            sort: [
                    { field: "TIKET_NAMA", dir: "asc" },
                    { field: "TIKET_TANGGAL", dir: "asc" }
            ]

        },
        height: 300,
        filterable: true,
        sortable: true,
        pageable: true,
        //editable: "inline",
        selectable: true,
        // toolbar: [{ text: "View", click: addIssue }],
        columns: [
          { command: [{ text: "delete", click: deleteItem_onClick }], title: "&nbsp;", width: 80 },
          {
              field: "TIKET_NAMA",
              title: "<center>NAMA</center>",
              width: 120
          },
          {
              field: "PENUMPANG_DESC",
              title: "<center>HUB. KELUARGA</center>",
              width: 100
          },
          {
              field: "TIKET_TANGGAL",
              title: "<center>TANGGAL</center>",
              width: 80
          },
          {
              field: "DARI_LOKASI",
              title: "<center>DARI</center>",
              width: 100
          },
          {
              field: "MENUJU_LOKASI",
              title: "<center>MENUJU</center>",
              width: 100
          },
          {
              field: "DURASI_KODE",
              title: "<center>WAKTU</center>",
              width: 50
          },
          {
              field: "LAYANAN_DESC",
              title: "<center>LAYANAN</center>",
              width: 80
          }
        ]
    });
}

function fn_load_request(id_dok) {

    $.ajax({
        url: $("#urlPath").val() + "/Request/searchRequest",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ s_find: id_dok }),
        success: function (data) {
            
            if (data.REQ_TYPE == 'ST') {
                $('#txtTipeRequest ').html('SURAT TUGAS/CUTI');
            } else {
                $('#txtTipeRequest ').html('EMERGENCY, OTHER');
            }

            if (data.REQ_IS_FAMILY == '0') {
                $('#txtTiketKeluarga ').html('TIKET PRIBADI');
            } else {
                $('#txtTiketKeluarga ').html('TIKET KELUARGA');
            }

            $("#txtNoDokumen").html(data.REQ_KODE);
            $("#row_id").val(data.REQ_ROW_ID);
            $('#lblNrp').html(data.REQ_NRP);
            $('#lblNama').html(data.REQ_NAMA);
            $('#lblDept').html(data.REQ_DEPT_CODE);
            $('#lblPosition').html(data.POSISI_TUGAS);
            $("#txtTanggalAwal").html(data.REQ_TGL_AWAL);
            $("#txtTanggalAkhir").html(data.REQ_TGL_AKHIR);
            $("#req_row_id").val(data.REQ_ROW_ID);

            if(data.REQ_IS_FAMILY == '1'){
                $("#txtJenisTiket").html('TIKET KELUARGA');
                settingHubKeluarga(1);
            } else {
                $("#txtJenisTiket").html('TIKET PRIBADI');
                settingHubKeluarga(0);
            }

            if (data.GROUP_GOLONGAN == "4") {
                $("#txtLayanan").kendoDropDownList({
                    dataSource: ds_layanan,
                    dataTextField: "LAYANAN_DESC",
                    dataValueField: "LAYANAN_CODE",
                    optionLabel: "Pilih Layanan",
                    index: 0
                });

            }
            else {
                $("#txtLayanan").kendoDropDownList({
                    dataSource: ds_layananNGA,
                    dataTextField: "LAYANAN_DESC",
                    dataValueField: "LAYANAN_CODE",
                                       
                    index: 0
                });
            }

            
            

            settingTanggal();
            

        },
        error: function (jqXHR, textStatus, errorThrow) {
            alert(textStatus);
        }
    });
}

function settingTanggal(tipe){

    var tgl_awal = $("#txtTanggalAwal").html();
    var tgl_akhir = $("#txtTanggalAkhir").html();
    
    //alert(tgl_awal.substring(0, 4) +'-'+ tgl_awal.substring(4, 6) +'-'+ tgl_awal.substring(6, 8));
    if(tipe == 1){
        $("#txtTanggal").kendoDatePicker({
            format: "yyyy-MM-dd",
            value: new Date(tgl_awal.substring(0, 4), kendo.toString(tgl_awal.substring(4, 6), 'd') - 1, tgl_awal.substring(6, 8)),
            min: new Date(tgl_awal.substring(0, 4), kendo.toString(tgl_awal.substring(4, 6), 'd') - 1, tgl_awal.substring(6, 8)),
            max: new Date(tgl_akhir.substring(0, 4), kendo.toString(tgl_akhir.substring(4, 6), 'd') - 1, tgl_akhir.substring(6, 8))
        });
    } else {
        $("#txtTanggal").kendoDatePicker({
            format: "yyyy-MM-dd",
            value: new Date()            
        });
    }

    //$("#txtTanggal").attr("readonly", true);

    
    

}

function settingHubKeluarga(tipe) {

    if(tipe == 1){
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