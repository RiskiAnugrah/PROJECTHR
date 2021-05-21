using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AdminLTE1.Models;
using Kendo.DynamicLinq;

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

        public ActionResult frm_inputUpah() {
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
        public ActionResult listemployeesalary(string paramst, int take, int skip, IEnumerable<Kendo.DynamicLinq.Sort> sort, Kendo.DynamicLinq.Filter filter)
        {
            try
            {
                IQueryable<VW_MASTER_SALARY_KARYAWAN> i_tbl_t;

                pb_db_ctx = new DB_FINGERDataContext();
               
                    i_tbl_t = pb_db_ctx.VW_MASTER_SALARY_KARYAWANs.Where(t => t.NAME.Contains(paramst) || t.NIK.Contains(paramst)).OrderBy(o => o.NIK).OrderBy(s => s.active_date_start);


                
                return Json(i_tbl_t.ToDataSourceResult(take, skip, sort, filter));
            }
            catch (Exception ex)
            {
                return this.Json(ex);
            }
        }

    }
}