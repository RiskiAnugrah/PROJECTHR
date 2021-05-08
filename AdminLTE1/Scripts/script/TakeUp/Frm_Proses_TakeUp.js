
//Variable

var selected = [];

////Event of Variable


//even handler

$(document).ready(function () {

    fn_load_grid()

    //alert('masuk');

    $("#SelectAll").change(function () {
        if ($('#SelectAll').is(':checked')) {
            $('.chkbx').prop('checked', true);
        }
        else {
            $('.chkbx').prop('checked', false);
        }
    });
});


function simpan_onClick() {

    getDataSelected();

    var res = false;


    if (selected.length != 0) {
        
        //if (confirm("" + selected.length + " Tiket Terpilih \n Lanjutkan Proses ???")) {

        bootbox.confirm({
            message: "" + selected.length + " Tiket Terpilih, Yakin untuk melanjutkan proses ???",
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

                    //for (var i = 0; i <= selected.length - 1; i++) {
                    //    alert(selected[i]);
                    //}

                    $.ajax({
                        url: $("#urlPath").val() + "/TakeUp/insertTakeUp",
                        type: "POST",
                        contentType: "application/json",
                        data: JSON.stringify({ s_data: selected }),
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



                            //window.parent.$("#dv_modal").data("kendoWindow").close();
                            //window.location = $("#urlPath").val() + "/Request/frmInputTiketRequest?Kode=" + data.split("|")[1];

                        },
                        error: function (jqXHR, textStatus, errorThrow) {
                            //alert(textStatus);
                            bootbox.alert({
                                message: textStatus,
                                size: 'small'
                            });



                        }
                    });

                }



            }

        });

       
        //if (
        //    res == true
        //   ) {

        //    //for (var i = 0; i <= selected.length - 1; i++) {
        //    //    alert(selected[i]);
        //    //}

        //    $.ajax({
        //        url: $("#urlPath").val() + "/TakeUp/insertTakeUp",
        //        type: "POST",
        //        contentType: "application/json",
        //        data: JSON.stringify({ s_data: selected }),
        //        success: function (data) {
        //            alert(data);
        //            window.parent.$("#dv_modal").data("kendoWindow").close();
        //            //window.location = $("#urlPath").val() + "/Request/frmInputTiketRequest?Kode=" + data.split("|")[1];

        //        },
        //        error: function (jqXHR, textStatus, errorThrow) {
        //            alert(textStatus);
        //        }
        //    });

        //}
        
       
    } else {
        alert('Pilih Tiket terlebih dahulu');
    }

    //selected = [];
    


    //alert('masuk');
}

function Select_All_onClick() {

    var grid = $('#dv_grid').data('kendoGrid');
    grid.tbody.children('tr').addClass('k-state-selected');

}

function Unselect_All_onClick() {
    var grid = $('#dv_grid').data('kendoGrid');
    grid.clearSelection();
}




//// end of Event Handler

//Function

function fn_load_grid() {
    $("#dv_grid").kendoGrid({
        dataSource: {
            batch: true,
            transport: {
                read: {
                    url: $("#urlPath").val() + "/Tiket/listTiketNotClose",
                    contentType: "application/json",
                    type: "POST"
                },
                parameterMap: function (data, operation) {
                    if (operation == "read") {
                        //data.s_find = "";
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
        sortable: false,
        pageable: true,
        editable: "inline",
        selectable: "multiple",
        pageable: {
            refresh: true,
            buttonCount: 10,
            input: true,
            pageSizes: [50,100,200,300,500, 1000, 100000],
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

function getDataSelected() {
    var grid = $("#dv_grid").data("kendoGrid");

    // array to store the dataItems
   
    selected = [];

    //get all selected rows (those which have the checkbox checked)  
    grid.select().each(function () {

        //push the dataItem into the array
        selected.push(grid.dataItem(this).TIKET_ROW_ID);       

    });
}


////Event of Function


