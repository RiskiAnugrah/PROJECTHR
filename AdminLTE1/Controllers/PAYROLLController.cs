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
    public class PAYROLLController : Controller
    {
        DB_FINGERDataContext pb_db_ctx;
        // GET: PAYROLL
        public ActionResult Index()
        {
            return View();
        }

        [SessionCheck]
        public ActionResult IndexBorongan()
        {
            return View();
        }

        [SessionCheck]
        public ActionResult frm_inputUpah() {
            return View();
        }

        [SessionCheck]
        public ActionResult frm_calculate_daily()
        {
            return View();
        }


        [HttpPost]
        public ActionResult insertUpah(TBL_SALARY s_tbl_salary)
        {
            try
            {
                pb_db_ctx = new DB_FINGERDataContext();
                pb_db_ctx.cusp_insert_upah(s_tbl_salary.notes,s_tbl_salary.active_date_start,s_tbl_salary.active_date_end,s_tbl_salary.amount,Session["username"].ToString());

                return Json(new { status = true, remarks = "data berhasil ditambahkan" });
            }
            catch (Exception ex)
            {
                return Json(new { status = true, remarks = "gagal karena " + ex.ToString() });
            }
        }

 
        [HttpPost]
        public ActionResult insertTarif(VW_TARIF_BORONGAN s_tbl)
        {
            try
            {
                pb_db_ctx = new DB_FINGERDataContext();
                pb_db_ctx.cusp_insert_tarif(s_tbl.itemcode, s_tbl.start_date, s_tbl.end_date, s_tbl.tarif, Session["username"].ToString());

                return Json(new { status = true, remarks = "data berhasil ditambahkan" });
            }
            catch (Exception ex)
            {
                return Json(new { status = true, remarks = "gagal karena " + ex.ToString() });
            }
        }


        [SessionCheck]
        [HttpPost]
        public ActionResult listemployeesalary(string paramst, int take, int skip, IEnumerable<Kendo.DynamicLinq.Sort> sort, Kendo.DynamicLinq.Filter filter)
        {
            try
            {
                IQueryable<VW_MASTER_SALARY_KARYAWAN> i_tbl_t;

                pb_db_ctx = new DB_FINGERDataContext();
               
                    i_tbl_t = pb_db_ctx.VW_MASTER_SALARY_KARYAWANs.Where(t => t.NAME.Contains(paramst) || t.NIK.Contains(paramst)).OrderBy(o => o.NIK).OrderByDescending(s => s.active_date_end);


                
                return Json(i_tbl_t.ToDataSourceResult(take, skip, sort, filter));
            }
            catch (Exception ex)
            {
                return this.Json(ex);
            }
        }

      
        [HttpPost]
        public ActionResult listtarifborongan(string paramst, int take, int skip, IEnumerable<Kendo.DynamicLinq.Sort> sort, Kendo.DynamicLinq.Filter filter)
        {
            try
            {
                IQueryable<VW_TARIF_BORONGAN> i_tbl_t;

                pb_db_ctx = new DB_FINGERDataContext();

                i_tbl_t = pb_db_ctx.VW_TARIF_BORONGANs.Where(t => t.itemcode.Contains(paramst) || t.itemlocaldesc.Contains(paramst)).OrderBy(o => o.itemcode).OrderByDescending(s => s.end_date);



                return Json(i_tbl_t.ToDataSourceResult(take, skip, sort, filter));
            }
            catch (Exception ex)
            {
                return this.Json(ex);
            }
        }


        [HttpPost]
        public ActionResult calculate(string tgl)
        {
            try
            {
                pb_db_ctx = new DB_FINGERDataContext();

                pb_db_ctx.EXTRACT_DATA_ABSEN_PARAM(tgl);

                return Json(new { remarks = "Complete", STATUS = true });
            }
            catch (Exception ex)
            {
                return Json(new { remarks = ex.ToString(), STATUS = false });
            }
        }

        [SessionCheck]
        public ActionResult frm_inputBorongan()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ReadItemBoronganAutoComplete()
        {
            pb_db_ctx = new DB_FINGERDataContext();
            var i_tbl = pb_db_ctx.VW_ITEM_BORONGAN_AUTOCOMPLETEs.OrderBy(O => O.VALUE);
            return Json(i_tbl);

        }
    }

}