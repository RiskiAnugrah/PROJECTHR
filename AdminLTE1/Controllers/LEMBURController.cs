using AdminLTE1.Models;
using AdminLTE1.Security;
using Kendo.DynamicLinq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AdminLTE1.Controllers
{
    public class LEMBURController : Controller
    {
        DB_FINGERDataContext pb_db_ctx;
        // GET: LEMBUR
        public ActionResult Index()
        {
            return View();
        }

        [SessionCheck]
        public ActionResult FormLembur()
        {
            return View();
        }

        [HttpPost]
        public ActionResult insertLembur(VW_TRANSAKSI_LEMBUR s_tbl)
        {
            try
            {
                pb_db_ctx = new DB_FINGERDataContext();
                var PID = pb_db_ctx.VW_M_USERs.Where(d => d.BADGENUMBER == s_tbl.BADGENUMBER).Select(t => t.USERID).FirstOrDefault();

                pb_db_ctx.cusp_insert_lembur(PID, s_tbl.tanggal,s_tbl.start, s_tbl.stop, "", s_tbl.notes, Session["USERNAME"].ToString());

                return Json(new { status = true, remarks = "data berhasil ditambahkan" });
            }
            catch (Exception ex)
            {
                return Json(new { status = true, remarks = "gagal karena " + ex.ToString() });
            }
        }

        [HttpPost]
        public ActionResult DeleteLembur(VW_TRANSAKSI_LEMBUR s_tbl)
        {
            try
            {
                pb_db_ctx = new DB_FINGERDataContext();
                TBL_T_LEMBUR tbl = pb_db_ctx.TBL_T_LEMBURs.Where(i => i.id.Equals(s_tbl.id)).FirstOrDefault();
                pb_db_ctx.TBL_T_LEMBURs.DeleteOnSubmit(tbl);

                pb_db_ctx.SubmitChanges();

                return Json(new { status = true, remarks = "data berhasil ditambahkan" });
            }
            catch (Exception ex)
            {
                return Json(new { status = true, remarks = "gagal karena " + ex.ToString() });
            }
        }

        [SessionCheck]
        [HttpPost]
        public ActionResult listLembur(string paramst, int take, int skip, IEnumerable<Kendo.DynamicLinq.Sort> sort, Kendo.DynamicLinq.Filter filter)
        {
            try
            {
                IQueryable<VW_TRANSAKSI_LEMBUR> i_tbl_t;
                pb_db_ctx = new DB_FINGERDataContext();
                var PID = pb_db_ctx.VW_TRANSAKSI_LEMBURs.Where(d => d.BADGENUMBER == paramst).Select(t => t.userid).FirstOrDefault();

                if (paramst == "")
                {
                    i_tbl_t = pb_db_ctx.VW_TRANSAKSI_LEMBURs.OrderByDescending(o => o.tanggal);

                }


                else
                {
                    i_tbl_t = pb_db_ctx.VW_TRANSAKSI_LEMBURs.Where(t => t.userid == PID).OrderByDescending(o => o.tanggal);


                }
                return Json(i_tbl_t.ToDataSourceResult(take, skip, sort, filter));
            }
            catch (Exception ex)
            {
                return this.Json(ex);
            }
        }
    }
}