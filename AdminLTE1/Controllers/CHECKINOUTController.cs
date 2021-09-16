using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AdminLTE1.Models;
using Kendo.DynamicLinq;
using AdminLTE1.Security;

namespace AdminLTE1.Controllers
{
    public class CHECKINOUTController : Controller
    {
        DB_FINGERDataContext pb_db_ctx;
        // GET: CHECKINOUT
        [SessionCheck]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FormManualAbsen()
        {
            return View();
        }


        [HttpPost]
        public ActionResult listAbsen(string paramst, int take, int skip, IEnumerable<Kendo.DynamicLinq.Sort> sort, Kendo.DynamicLinq.Filter filter)
        {
            try
            {
                IQueryable<VW_ABSEN> i_tbl_t;
                pb_db_ctx = new DB_FINGERDataContext();
                var PID = pb_db_ctx.USERINFOs.Where(d=>d.BADGENUMBER==paramst).Select(t=>t.USERID).FirstOrDefault();
              
                if (paramst == "")
                {
                    i_tbl_t = pb_db_ctx.VW_ABSENs.OrderBy(o => o.TANGGAL);

                }

               
                else
                {
                    i_tbl_t = pb_db_ctx.VW_ABSENs.Where(t => t.USERID == PID).OrderBy(o => o.TANGGAL);


                }
                return Json(i_tbl_t.ToDataSourceResult(take, skip, sort, filter));
            }
            catch (Exception ex)
            {
                return this.Json(ex);
            }
        }

      
        [HttpPost]
        public ActionResult updatechecktipe(VW_ABSEN s_tbl)
        {
            try
            {
                pb_db_ctx = new DB_FINGERDataContext();

                CHECKINOUT i_tbl = pb_db_ctx.CHECKINOUTs.Where(o => o.USERID.Equals(s_tbl.USERID)).Where(o=>o.CHECKTIME.Equals(s_tbl.CHECKTIME)).FirstOrDefault();
                i_tbl.CHECKTYPE = s_tbl.CHECKTYPE;
               


                pb_db_ctx.SubmitChanges();

                return Json(new { remarks = "data berhasil diubah", STATUS = true });
            }
            catch (Exception ex)
            {
                return Json(new { remarks = ex.ToString(), STATUS = false });
            }
        }
        [HttpPost]
        public ActionResult insertabsenmanula(CHECKINOUT s_tblam)
        {
            try
            {
                pb_db_ctx = new DB_FINGERDataContext();
                pb_db_ctx.cusp_insert_absenmanual(s_tblam.USERID, s_tblam.CHECKTIME, s_tblam.CHECKTYPE);

                return Json(new { status = true, remarks = "data berhasil ditambahkan" });
            }
            catch (Exception ex)
            {
                return Json(new { status = true, remarks = "gagal karena " + ex.ToString() });
            }
        }




    }
}