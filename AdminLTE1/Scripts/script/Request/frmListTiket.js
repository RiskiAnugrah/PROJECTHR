

////Event of Variable


//even handler



//// end of Event Handler

$(document).ready(function () {



    fn_load_request($('#id_dok').val());
    
    fnLoadSurat();



});

function btn_close_onclick() {
    window.parent.$("#dv_modal").data("kendoWindow").close();
}

//Function

////Event of Function


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

            if (data.REQ_IS_FAMILY == '1') {
                $("#txtJenisTiket").html('TIKET KELUARGA');               
            } else {
                $("#txtJenisTiket").html('TIKET PRIBADI');                
            }

            
        },
        error: function (jqXHR, textStatus, errorThrow) {
            alert(textStatus);
        }
    });
}

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
            serverSorting: true
        },
        height: 300,
        filterable: true,
        sortable: true,
        pageable: true,
        //editable: "inline",
        selectable: true,
        // toolbar: [{ text: "View", click: addIssue }],
        columns: [
          //{ command: [{ text: "delete", click: deleteItem_onClick }], title: "&nbsp;", width: 80 },
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


//even handler
