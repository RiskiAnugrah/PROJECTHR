
//Variable

////Event of Variable
//even handler

$(document).ready(function () {

    fn_load_grid();

   
});






function fn_load_grid() {
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
                    
                    { field: "TIKET_NAMA", dir: "asc" },
                    { field: "TIKET_TANGGAL", dir: "asc" },
                     

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
              field: "TITLE_CODE",
              title: "<center>TITLE</center>",
              width: 60

          },
          {
              field: "TIKET_NAMA",
              title: "<center>NAMA</center>",
              width: 60
              
          },
          {
              field: "TIKET_NO_HP",
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
              field: "RUTE",
              title: "<center>RUTE</center>",
              width: 20,
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


////Event of Function




