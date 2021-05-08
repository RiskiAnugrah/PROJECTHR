
//Variable

var ds_karyawan = new kendo.data.DataSource({
    type: "json",
    transport: {
        read: {
            url: $("#urlPath").val() + "/Referensi/listKaryawan",
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


var window_surat = $("#dv_modal").kendoWindow({
                        width: 800,
                        height: 500,
                        iframe: true,
                        modal: true,
                        close: onModalClose,
                        visible: false
                    }).data("kendoWindow");


var ViewModelRequest = new kendo.data.ObservableObject({
    REQ_ROW_ID : "",
    REQ_KODE : "",
    REQ_TYPE : "",
    REQ_NRP : "",
    REQ_NAMA : "",
    REQ_TGL_AWAL : "",
    REQ_TGL_AKHIR : "",
    REQ_DEPT_CODE: "",
    REQ_IS_FAMILY : "",
    REQ_INPUT_DATETIME : "",
    REQ_INPUT_BY : "",
    REQ_STATUS: ""
});


////Event of Variable


//even handler


$(document).ready(function () {
    
    $("#txtTanggalAwal").kendoDatePicker({
        format: "yyyy-MM-dd",
        value: new Date(),
        min: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
        change: function () {

            var tgl = kendo.toString($("#txtTanggalAwal").val(), 'yyyy-MM-dd');
            $("#txtTanggalAkhir").val($("#txtTanggalAwal").val());
            
            $("#txtTanggalAkhir").kendoDatePicker({
                format: "yyyy-MM-dd",
                min :new Date(tgl.substring(0, 4), kendo.toString(tgl.substring(5, 7), 'd') - 1, tgl.substring(8, 10))
               
                //min: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
            });

           
        }

    });

    $("#txtTanggalAkhir").kendoDatePicker({
        format: "yyyy-MM-dd",
        value: new Date()
        //min: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    });

    $("#txtTipeRequest").kendoDropDownList({
        dataSource: [
                { "kode": "ST", "value": "SURAT TUGAS/CUTI" },
                { "kode": "OT", "value": "EMERGENCY, OTHER" }
        ],
        dataTextField: "value",
        dataValueField: "kode",
        optionLabel: "Pilih Tipe Request",
        change: txtTipeTiketOnchange,
        index: 0
    });

    $("#txtTiketKeluarga").kendoDropDownList({
        dataSource: [
                { "kode": "0", "value": "TIKET PRIBADI" },
                { "kode": "1", "value": "TIKET KELUARGA" }
        ],
        dataTextField: "value",
        dataValueField: "kode",
        optionLabel: "Pilih Tipe Tiket",
        index: 0
    });

    $("#txtNrp").width(300).kendoAutoComplete({
        dataTextField: "NAME",
        dataValueField: "NRP",
        dataSource: ds_karyawan,
        minLength: 3,
        template: '<span data-atmp="#= NRP #"> #= NRP # - #= NAME #</span>',
        //template: "#= EGI #",
        filter: "contains",
        placeholder: "Masukan NRP/NAMA...",
        select: function (e) {
            var dataItem = this.dataItem(e.item.index());
            $("#lblNrp").html("" + dataItem.NRP);
            $("#lblNama").html("" + dataItem.NAME);
            $("#lblDept").html("" + dataItem.DEPT_CODE);
            $('#lblPosition').html("" + dataItem.POS_TITLE);

        }
    });

    $("#txtTanggalAwal").data('kendoDatePicker').enable(false);
    $("#txtTanggalAkhir").data('kendoDatePicker').enable(false);


    fnLoadSurat();
        

});


function txtTipeTiketOnchange() {

    
    if ($("#txtTipeRequest").data("kendoDropDownList").value() == "OT") {

        $("#txtNoDokumen").attr('disabled', true);
        $("#btn_dokumen").attr('disabled', true);
        $("#txtNrp").attr('disabled', false);
        $("#txtTanggalAwal").data('kendoDatePicker').enable(true);
        $("#txtTanggalAkhir").data('kendoDatePicker').enable(true);
    } else {
        $("#txtNoDokumen").attr('disabled', false);
        $("#btn_dokumen").attr('disabled', false);
        $("#txtNrp").attr('disabled', true);
        $("#txtTanggalAwal").data('kendoDatePicker').enable(false);
        $("#txtTanggalAkhir").data('kendoDatePicker').enable(false);

    }
    $('#txtNoDokumen').val('');
    $("#txtNrp").val('');
    $("#lblNrp").html("...");
    $("#lblNama").html("...");
    $("#lblDept").html("...");
    $('#lblPosition').html("...");
    //$("#txtTanggalAwal").val('');
    //$("#txtTanggalAkhir").val('');
    //$("#txtTanggalAwal").data('kendoDatePicker').value = new Date();
   

    $("#txtTanggalAwal").val(kendo.toString(new Date, 'yyyy-MM-dd'));
    $("#txtTanggalAkhir").val(kendo.toString(new Date, 'yyyy-MM-dd'));
}


function btn_create_onclick() {

   
    //ViewModelRequest.REQ_ROW_ID = "";
    ViewModelRequest.REQ_KODE = $('#txtNoDokumen').val();
    ViewModelRequest.REQ_TYPE = $("#txtTipeRequest").data("kendoDropDownList").value();
    ViewModelRequest.REQ_NRP = $('#lblNrp').html();
    ViewModelRequest.REQ_NAMA = $('#lblNama').html();
    ViewModelRequest.REQ_TGL_AWAL = $("#txtTanggalAwal").val().replace("-", "").replace("-", "");
    ViewModelRequest.REQ_TGL_AKHIR = $("#txtTanggalAkhir").val().replace("-", "").replace("-", "");
    ViewModelRequest.REQ_DEPT_CODE = $('#lblDept').html();
    ViewModelRequest.REQ_IS_FAMILY = $('#txtTiketKeluarga').data("kendoDropDownList").value();
    
    if (ViewModelRequest.REQ_TYPE == "" || 
        (ViewModelRequest.REQ_TYPE == "ST" && ViewModelRequest.REQ_KODE.trim().length == 0) || 
        ViewModelRequest.REQ_NRP.trim().length == 0 ||
        ViewModelRequest.REQ_NAMA.trim().length == 0 || 
        ViewModelRequest.REQ_TGL_AWAL.trim().length == 0 ||
        ViewModelRequest.REQ_IS_FAMILY == "") {

        //alert("Isikan semua kolom isian dengan benar");

        bootbox.alert({
            message: "Isikan semua kolom isian dengan benar",
            size: 'small'
        });

    } else {


        $.ajax({
            url: $("#urlPath").val() + "/Request/insertRequest",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ s_data: ViewModelRequest }),
            success: function (data) {
                //alert(data.split("|")[0]);

                bootbox.alert({
                    message: data.split("|")[0],
                    size: 'small',
                    className: 'bb-alternate-modal',
                    callback: function (result) {
                        window.location = $("#urlPath").val() + "/Request/frmInputTiketRequest?Kode=" + data.split("|")[1];
                    }
                });

                
                
            },
            error: function (jqXHR, textStatus, errorThrow) {
                alert(textStatus);
            }
        });


    }
   
}

function btn_dokumen_onclick() {
    showModal();
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
                        ID_DOKUMEN: { type: "string", editable: false },
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

    $("#txtNoDokumen").val(dataItem.ID_DOKUMEN);
    $("#txtNrp").val(dataItem.NAMA_TUGAS);
    $('#lblNrp').html(dataItem.NRP_TUGAS);
    $('#lblNama').html(dataItem.NAMA_TUGAS);
    $('#lblDept').html(dataItem.DEPT_CODE_TUGAS);
    $('#lblPosition').html(dataItem.POSISI_TUGAS);
    $("#txtTanggalAwal").val(dataItem.TGL_AWAL_TUGAS);
    $("#txtTanggalAkhir").val(dataItem.TGL_AKHIR_TUGAS);

    window_surat.close();

}



function showModal() {

    $("#dv_grid").data("kendoGrid").dataSource.read();

    //var win = $("#dv_modal").data("kendoWindow");
    //win.title("Pilih Surat Tugas / Cuti");
    //win.refresh({ url: $("#urlPath").val() + '/Request/frmListSurat' });

    //win.center().open().maximize();

    window_surat.center().open();
    //win.center().open();
}

function onModalClose() {
    //$("#dv_modal").empty();    
    $("#dv_grid").data("kendoGrid").dataSource.read();
}




////Event of Function





    
