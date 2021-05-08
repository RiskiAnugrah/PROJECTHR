/// <reference path="../../../Views/TakeUp/Frm_Proses_TakeUp.cshtml" />
/// <reference path="../../../Views/TakeUp/Frm_Proses_TakeUp.cshtml" />

//Variable

////Event of Variable
//even handler
//// end of Event Handler

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

function Download_OnClick(e) {
    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));

    var url = "http://kidesqco403/ReportServer/Pages/ReportViewer.aspx?%2fHCGSOLReport%2fTIKET%2fRpt_ReportTiket&TAKE_UP="+ dataItem.TAKE_UP_DOK +"&rs%3AFormat=excel";
    window.open(url, '_blank');
    //alert(url);
}

function btn_create_onclick() {
    var win = $("#dv_modal").data("kendoWindow");
    win.title("TAKE UP");

    win.refresh({ url: $("#urlPath").val() + '/TakeUp/Frm_Proses_TakeUp' });

    win.center().open().maximize();
}

//Function

////Event of Function

function fn_load_grid() {
    $("#dv_grid").kendoGrid({
        dataSource: {
            batch: true,
            transport: {
                read: {
                    url: $("#urlPath").val() + "/TakeUp/listProgressTakeUp",
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
                    id: "TAKE_ROW_ID",
                    fields: {
                        TAKE_UP_DOK: { type: "string", editable: false },
                        TAKE_UP_DATETIME: { type: "datetime", editable: false },
                        TAKE_UP_STATUS: { type: "string", editable: false },
                        JML_TIKET: { type: "int", editable: false },
                        JML_OPEN: { type: "int", editable: false },
                        JML_CLOSE: { type: "int", editable: false }
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
          { command: [{ text: "View", click: showDetails }], title: "&nbsp;", width: 8 },
          {
              field: "TAKE_UP_DOK",
              title: "<center>NOMOR DOKUMEN</center>",
              width: 15,
          },
          {
              field: "TAKE_UP_DATETIME",
              title: "<center>TANGGAL</center>",
              width: 12,
              template: '<div style="text-align:center;">#= (TAKE_UP_DATETIME == null)? "" : kendo.toString(kendo.parseDate(TAKE_UP_DATETIME, "yyyy-MM-dd"), "yyyy-MM-dd")  #</div>'
          },
          {
              field: "JML_TIKET",
              title: "<center>JUMLAH</center>",
              width: 10,
              template: '<div style="text-align:center;">#= JML_TIKET #</div>'
          },
          {
              field: "JML_OPEN",
              title: "<center>TIKET OPEN</center>",
              width: 10,
              template: '<div style="text-align:center;">#= JML_OPEN #</div>'
          },
          {
              field: "JML_CLOSE",
              title: "<center>TIKET CLOSE</center>",
              width: 10,
              template: '<div style="text-align:center;">#= JML_CLOSE #</div>'
          },
          {
              field: "TAKE_UP_STATUS",
              title: "<center>STATUS</center>",
              width: 10,
              template: '<div style="text-align:center;">#= TAKE_UP_STATUS #</div>'
          },
           { command: [{ text: "Download", click: Download_OnClick, }], title: "&nbsp;", width: 8, hidden:false }


        ]
    });
}


function editVisible(e) {
    return false;
}

function showDetails(e) {
   
    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
  
    if (dataItem.TAKE_UP_STATUS == "OPEN") {
        var nomor_takeup = dataItem.TAKE_UP_DOK;
        var win = $("#dv_modal").data("kendoWindow");
        win.title(nomor_takeup);

        win.refresh({ url: $("#urlPath").val() + '/Tiket/Frm_Progress_Tiket?KODE=' + dataItem.TAKE_UP_DOK });

        win.center().open().maximize();
    }
    else {
        var nomor_takeup = dataItem.TAKE_UP_DOK;
        var win = $("#dv_modal").data("kendoWindow");
        win.title("LIST ISSUED TIKET " + nomor_takeup);
        win.refresh({ url: $("#urlPath").val() + '/Tiket/Frm_view_issued?KODE=' + dataItem.TAKE_UP_DOK });

        win.center().open().maximize();
    }
    
}

function onModalClose() {
    $("#dv_modal").empty();
    $("#dv_grid").data("kendoGrid").dataSource.read();
}


//even handler