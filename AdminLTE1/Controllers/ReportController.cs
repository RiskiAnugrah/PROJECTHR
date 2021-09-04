using CrystalDecisions.CrystalReports.Engine;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AdminLTE1.Models;
using AdminLTE1.Security;

namespace AdminLTE1.Controllers
{
    public class ReportController : Controller
    {
        // GET: Report
        [SessionCheck]
        public ActionResult rptSLIP()
        {
            return View();
        }

        [SessionCheck]
        public ActionResult rptBorongan() {
            return View();
        }

        [SessionCheck]
        public ActionResult rptBoronganHRD()
        {
            return View();
        }

        [SessionCheck]
        public ActionResult rptGajiBorongan()
        {
            return View();
        }

    
        public ActionResult ExportSLIP(string userid,string tglawal, string tglakhir)
        {
          
            ReportDocument rd = new ReportDocument();
            rd.Load(Path.Combine(Server.MapPath("~/Report"), "rptSLIP.rpt"));
            rd.SetParameterValue("userid", userid.Replace("[",""));
            rd.SetParameterValue("tanggal_awal",tglawal);
            rd.SetParameterValue("tanggal_akhir", tglakhir);
            rd.SetDatabaseLogon("sa", "dbtredp");


            Response.Buffer = false;
            Response.ClearContent();
            Response.ClearHeaders();


            Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
            stream.Seek(0, SeekOrigin.Begin);
            return File(stream, "application/pdf", "SLIPReport.pdf");

          
        }

    
        public ActionResult ExportBORONGAN(string tglawal, string tglakhir)
        {

            ReportDocument rd = new ReportDocument();
            rd.Load(Path.Combine(Server.MapPath("~/Report"), "rptBorongan.rpt"));

            rd.SetParameterValue("tglawal", tglawal);
            rd.SetParameterValue("tglakhir", tglakhir);
            rd.SetDatabaseLogon("sa", "dbtredp");


            Response.Buffer = false;
            Response.ClearContent();
            Response.ClearHeaders();


            Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.Excel);
            stream.Seek(0, SeekOrigin.Begin);
            return File(stream, "application/xls", "BORONGANReport.xls");


        }

        public ActionResult ExportGAJIBORONGAN(string tglawal, string tglakhir)
        {

            ReportDocument rd = new ReportDocument();
            rd.Load(Path.Combine(Server.MapPath("~/Report"), "rptSLipGroupBorongan.rpt"));

            rd.SetParameterValue("tglawal", tglawal);
            rd.SetParameterValue("tglakhir", tglakhir);
            rd.SetDatabaseLogon("sa", "dbtredp");


            Response.Buffer = false;
            Response.ClearContent();
            Response.ClearHeaders();


            Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.Excel);
            stream.Seek(0, SeekOrigin.Begin);
            return File(stream, "application/xls", "slipGroupBORONGAN.xls");


        }

        public ActionResult ExportBORONGANHRD(string tglawal, string tglakhir)
        {

            ReportDocument rd = new ReportDocument();
            rd.Load(Path.Combine(Server.MapPath("~/Report"), "rptBoronganHRD.rpt"));

            rd.SetParameterValue("tgl1", tglawal);
            rd.SetParameterValue("tgl2", tglakhir);
            rd.SetDatabaseLogon("sa", "dbtredp");


            Response.Buffer = false;
            Response.ClearContent();
            Response.ClearHeaders();


            Stream stream = rd.ExportToStream(CrystalDecisions.Shared.ExportFormatType.Excel);
            stream.Seek(0, SeekOrigin.Begin);
            return File(stream, "application/xls", "LH_UNTUK_HRDReport.xls");


        }
    }
}