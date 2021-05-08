
//Variable

////Event of Variable
//even handler

$(document).ready(function () {
    $("#loader").hide();
    fn_load_grid_temp();
    document.getElementById("btn_closing").disabled = true;
   
});




//// end of Event Handler
var p_file_temp = '';
//Function
function FilePreparation(this_) {
    p_file_temp = this_;
}
function btn_uploadOnClick() {
    if (validOnUpload(p_file_temp)) {
        $("#loader").show();
        OnUpload(p_file_temp);
    }
}

function validOnUpload(this_) {
    var pathUpload = $(this_).attr("id");
    input = document.getElementById(pathUpload);
    var iBlstatus = false;
    var val = $(this_).val();
    var regex = new RegExp("(.*?)\.(Rpt_tiketDetail.xls)$");
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        alert('The File APIs are not fully supported in this browser !');
    }
    if (!input) {
        alert("Um, couldn't find the fileinput element !");
    }
    else if (!input.files) {
        bootbox.alert("This browser doesn't seem to support the `files` property of file inputs !");
    }
    else if (!input.files[0]) {
        alert("Pilih file lampiran sebelum klik 'Proses' !");
    }
    else if (window.FormData == undefined) {
        alert("This browser doesn't support HTML5 file uploads !")
    }  else {
        iBlstatus = true;
    }
    return iBlstatus;
}

function OnUpload(this_) {

    var kode = $("#id_dok").val();
    var param = '?KODE=' + kode;

    if (window.FormData !== undefined) {
        var data = new FormData();
        var pathUpload = '#' + $(this_).attr("id");
        //var param = '?' + $('#id_dok').val() + '';
        data.append("files", $(pathUpload)[0].files[0]);
        $.ajax({
            type: "POST",
            url: $("#urlPath").val() + '/TakeUp/uploadDokumen' + param,
            contentType: false,
            processData: false,
            data: data,
            success: function (result) {
                   
                    bootbox.alert(result.remarks + result.dokumen);
                    $("#loader").hide();
                    fn_load_grid_temp();
                
            },
            error: function (xhr, status, p3, p4) {
                var err = "Error " + " " + status + " " + p3 + " " + p4;
                if (xhr.responseText && xhr.responseText[0] == "{")
                    err = JSON.parse(xhr.responseText).Message;
            }
        });
    } else {
        bootbox.alert("This browser doesn't support HTML5 file uploads!");
    }
}





function fn_load_grid() {
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
                        data.s_find = ""+ $("#id_dok").val() +"";
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
                        TIKET_NAMA: { type: "string", editable: false },
                        PENUMPANG_DESC: { type: "string", editable: false },
                        TIKET_TANGGAL: { type: "string", editable: false },
                        DARI_LOKASI: { type: "string", editable: false },
                        MENUJU_LOKASI: { type: "string", editable: false },
                        DURASI_CODE: { type: "string", editable: false },
                        LAYANAN_DESC: { type: "string", editable: false }
                    }
                }

            },
            pageSize: 100,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: false,
            sort: [
                    { field: "TIKET_NAMA", dir: "asc" },
                    { field: "TIKET_TANGGAL", dir: "asc" }
                  ]

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
          {
              field: "TIKET_NAMA",
              title: "<center>NAMA</center>",
              width: 60
              
          },
          {
              field: "PENUMPANG_DESC",
              title: "<center>TIPE PENUMPANG</center>",
              width: 30,
              template: '<div style="text-align:center;">#= PENUMPANG_DESC #</div>'
          },
          {
              field: "TIKET_TANGGAL",
              title: "<center>TANGGAL</center>",
              width: 20,
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
              field: "DURASI_CODE",
              title: "<center>WAKTU</center>",
              width: 20,
              template: '<div style="text-align:center;">#= DURASI_CODE #</div>'
          },
           {
               field: "LAYANAN_DESC",
               title: "<center>SERVICE</center>",
               width: 30,
               template: '<div style="text-align:center;">#= LAYANAN_DESC #</div>'
           }



        ]
    });
}


function fn_load_grid_temp() {
    if ($("#dv_grid").data().kendoGrid != null) {
        $("#dv_grid").data().kendoGrid.destroy();
        $("#dv_grid").empty();
    }

    $("#dv_grid").kendoGrid({
        dataSource: {
            batch: true,
            transport: {
                read: {
                    url: $("#urlPath").val() + "/Tiket/listTMPFromExcelToDB",
                    contentType: "application/json",
                    type: "POST"
                },
                parameterMap: function (data, operation) {
                    if (operation == "read") {
                        data.s_str_tud = "" + $("#id_dok").val() + "";
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

                        MENUJU_LOKASI: { type: "string", editable: false },
                        RUTE: { type: "string", editable: false },
                        WAKTU: { type: "string", editable: false },
                        JAM: { type: "string", editable: false },
                        PESAWAT: { type: "string", editable: false },
                        KELAS_TIKET: { type: "string", editable: false },
                        HARGA_TIKET: { type: "string", editable: false },
                        CODE_BOOKING: { type: "string", editable: false },
                        TIKET_ROW_ID: { type: "string", editable: false },
                        TIKET_TAKE_UP_DOK: { type: "string", editable: false }
                    }
                }

            },
            pageSize: 100,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: false,
            sort: [

                   

            ]

        },
        height: 500,
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
          { command: [{ text: "REBIDDING", click: cufn_rebidding },{ text: "  BATALKAN  ", click: cufn_batalkan }], width:30 },
          {
              field: "TITLE_CODE",
              title: "<center>TITLE</center>",
              width: 20

          },
          {
              field: "TIKET_NAMA",
              title: "<center>NAMA</center>",
              width: 60

          },
          {
              field: "TIKET_TANGGAL",
              title: "<center>TANGGAL</center>",
              width: 40,
              template: '<div style="text-align:center;">#= TIKET_TANGGAL #</div>'
          },
          {
              field: "RUTE",
              title: "<center>RUTE</center>",
              width: 30,
              template: '<div style="text-align:center;">#= RUTE #</div>'
          },
        
           {
               field: "PESAWAT",
               title: "<center>PESAWAT</center>",
               width: 30,
               template: '<div style="text-align:center;">#= PESAWAT #</div>'
           },
           {
               field: "JAM",
               title: "<center>JAM</center>",
               width: 20,
               template: '<div style="text-align:center;">#= JAM #</div>'
           },
           {
               field: "HARGA_TIKET",
               title: "<center>HARGA</center>",
               width: 20,
               template: '<div style="text-align:center;">#= HARGA_TIKET #</div>'
           },
            {
                field: "CODE_BOOKING",
                title: "<center>KODE</center>",
                width: 20,
                template: '<div style="text-align:center;">#= CODE_BOOKING #</div>'
            },



        ]
    });
}



function cufn_rebidding(e) {
    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
    bootbox.confirm({
        message: "Yakin rebidding data??",
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

                var i_cls_data = {
                    TIKET_ROW_ID: dataItem.TIKET_ROW_ID,
                }

                $.ajax({
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    url: $("#urlPath").val() + "/TIKET/rebiddingTiket",
                    data: JSON.stringify(i_cls_data),
                    success: function (response) {
                        if (response.status == true) {
                            bootbox.alert({
                                message: response.remarks,
                                size: 'small',
                                className: 'bb-alternate-modal',
                                callback: function (result) {
                                    fn_load_grid_temp();
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

    });

    //bootbox.alert(dataItem.TIKET_ROW_ID);
   

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

                var i_cls_data = {
                    TIKET_ROW_ID: dataItem.TIKET_ROW_ID,
                }

                $.ajax({
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    url: $("#urlPath").val() + "/TIKET/updateTiketBatalkan",
                    data: JSON.stringify(i_cls_data),
                    success: function (response) {
                        if (response.status == true) {
                            bootbox.alert({
                                message: response.remarks,
                                size: 'small',
                                className: 'bb-alternate-modal',
                                callback: function (result) {
                                    fn_load_grid_temp();
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

    });

    //bootbox.alert(dataItem.TIKET_ROW_ID);


}

function cufn_updateTiket() {
   
        $("#loader").show();
        var kode =  $("#id_dok").val();

        $.ajax({
            url: $("#urlPath").val() + "/Tiket/updateTiketFromExcel?s_takeup_dok="+kode,
            type: "POST",
            contentType: "application/json",
         
            success: function (data) {

                bootbox.alert({
                    message: data,
                    size: 'small',
                    className: 'bb-alternate-modal',
                    callback: function (result) {
                        fn_load_grid_temp();

                        $("#loader").hide();
                        document.getElementById("btn_closing").disabled = false;
                        $('#loader').hide()
                    }
                });


            },
            error: function (jqXHR, textStatus, errorThrow) {
                alert(textStatus);
            }
        });
}

function cufn_closingTiket() {
    var kode = $("#id_dok").val();

    $.ajax({
        url: $("#urlPath").val() + "/TAKEUP/update_ClosingTakeup?s_kode_takeup=" + kode,
        type: "POST",
        contentType: "application/json",

        success: function (data) {

            bootbox.alert({
                message: data.remarks,
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








////Event of Function




