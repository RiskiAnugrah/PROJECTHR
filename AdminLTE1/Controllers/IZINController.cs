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
    public class IZINController : Controller
    {
        DB_FINGERDataContext pb_db_ctx;
        // GET: IZIN
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FormIzin()
        {
            return View();
        }

        [HttpPost]
        public ActionResult insertIzin(VW_TRANSAKSI_IZIN s_tbl)
        {
            try
            {
                pb_db_ctx = new DB_FINGERDataContext();
                var PID = pb_db_ctx.VW_M_USERs.Where(d => d.BADGENUMBER == s_tbl.BADGENUMBER).Select(t => t.USERID).FirstOrDefault();

                pb_db_ctx.cusp_insert_izin(PID, s_tbl.date,s_tbl.doc_type,s_tbl.note, Session["USERNAME"].ToString());
          
                return Json(new { status = true, remarks = "data berhasil ditambahkan" });
            }
            catch (Exception ex)
            {
                return Json(new { status = true, remarks = "gagal karena " + ex.ToString() });
            }
        }

        [HttpPost]
        public ActionResult DeleteIzin(VW_TRANSAKSI_IZIN s_tbl)
        {
            try
            {
                pb_db_ctx = new DB_FINGERDataContext();
                TBL_T_IZIN tbl = pb_db_ctx.TBL_T_IZINs.Where(i => i.id.Equals(s_tbl.id)).FirstOrDefault();
                pb_db_ctx.TBL_T_IZINs.DeleteOnSubmit(tbl);

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
        public ActionResult listIzin(string paramst, int take, int skip, IEnumerable<Kendo.DynamicLinq.Sort> sort, Kendo.DynamicLinq.Filter filter)
        {
            try
            {
                IQueryable<VW_TRANSAKSI_IZIN> i_tbl_t;
                pb_db_ctx = new DB_FINGERDataContext();
                var PID = pb_db_ctx.VW_TRANSAKSI_IZINs.Where(d => d.BADGENUMBER == paramst).Select(t => t.userid).FirstOrDefault();

                if (paramst == "")
                {
                    i_tbl_t = pb_db_ctx.VW_TRANSAKSI_IZINs.OrderByDescending(o => o.date);

                }


                else
                {
                    i_tbl_t = pb_db_ctx.VW_TRANSAKSI_IZINs.Where(t => t.userid == PID).OrderByDescending(o => o.date);


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