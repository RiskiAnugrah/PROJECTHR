
//Variable

////Event of Variable
//even handler
//// end of Event Handler

$(document).ready(function () {

    fnLoadSurat();

    
});


//Function

////Event of Function


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
                    url: $("#urlPath").val() + "/Referensi/listSuratTugas",
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
                    id: "ID_DOKUMEN",
                    fields: {
                        NRP_TUGAS: { type: "string", editable: false },
                        NAMA_TUGAS: { type: "string", editable: false },
                        DEPT_CODE_TUGAS: { type: "string", editable: false },
                        POSISI_TUGAS: { type: "string", editable: false },
                        TGL_AWAL_TUGAS: { type: "string", editable: false },
                        TGL_AKHIR_TUGAS: { type: "string", editable: false },
                        KEPERLUAN_DESC: { type: "string", editable: false },
                        STATUS_DOC: { type: "string", editable: false },
                        GOLONGAN: { type: "string", editable: false }
                    }
                }

            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true
        },
        height: 500,
        filterable: true,
        sortable: true,
        pageable: true,
        //editable: "inline",
        selectable: true,
        // toolbar: [{ text: "View", click: addIssue }],
        columns: [
          { command: [{ text: "Select", click: selectItem }], title: "&nbsp;", width: 80 },
          {
              field: "ID_DOKUMEN",
              title: "<center>NO DOKUMEN</center>",
              width: 120
          },
          {
              field: "NRP_TUGAS",
              title: "<center>NRP</center>",
              width: 100
          },
          {
              field: "NAMA_TUGAS",
              title: "<center>NAMA</center>",
              width: 200
          },
          {
              field: "DEPT_CODE_TUGAS",
              title: "<center>DEPT</center>",
              width: 50
          },
          {
              field: "POSISI_TUGAS",
              title: "<center>JABATAN</center>",
              width: 250
          },
          {
              field: "TGL_AWAL_TUGAS",
              title: "<center>TGL AWAL</center>",
              width: 100
          },
          {
              field: "TGL_AKHIR_TUGAS",
              title: "<center>TGL AKHIR</center>",
              width: 100
          },
          {
              field: "KEPERLUAN_DESC",
              title: "<center>KEPERLUAN</center>",
              width: 300
          },
          {
              field: "GOLONGAN",
              title: "<center>GOLONGAN</center>",
              width: 30
          },


        ]
    });
}

function selectItem(e) {

    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));

    $("#txtNoDokumen").val(dataItem.id_dokumen);

    
}

//even handler
