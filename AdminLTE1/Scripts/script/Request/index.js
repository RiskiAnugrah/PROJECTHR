
//Variable

////Event of Variable
//even handler
//// end of Event Handler

//Function

////Event of Function


//even handler


$(document).ready(function () {

    fn_load_grid()

    $("#dv_modal").kendoWindow({
        width: 1000,
        height: 800,
        iframe: true,
        modal: true,
        close: onModalClose,
        visible: false
    }).data("kendoWindow");
});

function btn_create_onclick() {

    var win = $("#dv_modal").data("kendoWindow");
    win.title("INPUT REQUEST");
    win.refresh({ url: $("#urlPath").val() + '/Request/frmInputRequest' });

    win.center().open().maximize();
}



//// end of Event Handler


//Function
    
function fn_load_grid() {
    $("#dv_grid").kendoGrid({
        dataSource: {
            batch: true,
            transport: {
                read: {
                    url: $("#urlPath").val() + "/Request/listRequest",
                    contentType: "application/json",
                    type: "POST"
                },
                parameterMap: function (data, operation) {
                    if (operation == "read") {
                        //data.s_kode = $("#hid_kode").val();
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
                    id: "REQ_ROW_ID",
                    fields: {
                        REQ_KODE: { type: "string", editable: false },
                        REQ_NRP: { type: "string", editable: false },
                        REQ_TYPE: { type: "string", editable: false },
                        REQ_NAMA: { type: "string", editable: false }, 
                        REQ_TGL_AWAL: { type: "string", editable: false },
                        REQ_TGL_AKHIR: { type: "string", editable: false },
                        REQ_STATUS: { type: "string", editable: false },
                        JML_TIKET: { type: "int", editable: false }
                    }
                }

            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true
        },
        height: 550,
        filterable: true,
        sortable: true,
        pageable: true,
        editable: "inline",
        selectable: true,
        pageable: {
            refresh: true,
            buttonCount: 10,
            input: true,
            pageSizes: [10, 20, 50, 100, 1000, 100000],
            info: true,
            messages: {
            }
        },
        // toolbar: [{ text: "View", click: addIssue }],
        columns: [
          { command: [{ text: "View", click: showDetails }], title: "&nbsp;", width: 70 },
          {
              field: "REQ_KODE",
              title: "<center>DOKUMEN</center>",
              width: 110,
          },
          {
              field: "REQ_TYPE",
              title: "<center>TYPE</center>",
              width: 50,
              template: '<div style="text-align:center;">#= REQ_TYPE #</div>'
          },
          {
              field: "REQ_NRP",
              title: "<center>NRP</center>",
              width: 60,
              template: '<div style="text-align:center;">#= REQ_NRP #</div>'
          },
          {
              field: "REQ_NAMA",
              title: "<center>NAMA</center>",
              width: 170,
          },
          {
              field: "REQ_DEPT_CODE",
              title: "<center>DEPT</center>",
              width: 60,
              template: '<div style="text-align:center;">#= REQ_DEPT_CODE #</div>'
          },
          {
              field: "REQ_TGL_AWAL",
              title: "<center>AWAL</center>",
              width: 80,
              template: '<div style="text-align:center;">#= REQ_TGL_AWAL #</div>'
          },
          {
              field: "REQ_TGL_AKHIR",
              title: "<center>AKHIR</center>",
              width: 80,
              template: '<div style="text-align:center;">#= REQ_TGL_AKHIR #</div>'
          },
           {
               field: "JML_TIKET",
               title: "<center>TIKET</center>",
               width: 80,
               template: '<div style="text-align:center;">#= JML_TIKET #</div>'
           },
          {
              field: "REQ_STATUS",
              title: "<center>STATUS</center>",
              width: 60,
              template: '<div style="text-align:center;">#= REQ_STATUS #</div>'
          }
         


        ]
    });
}


function showDetails(e) {

    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));

    var win = $("#dv_modal").data("kendoWindow");
    win.title("INPUT TIKET");

    if (dataItem.REQ_STATUS == '01') {
        win.refresh({ url: $("#urlPath").val() + '/Request/frmInputTiketRequest?Kode=' + dataItem.REQ_KODE });
    } else {
        win.refresh({ url: $("#urlPath").val() + '/Request/frmListTiket?Kode=' + dataItem.REQ_KODE });
    }
   

    win.center().open().maximize();

}

function onModalClose() {
    $("#dv_modal").empty();
    $("#dv_grid").data("kendoGrid").dataSource.read();
}

////Event of Function




