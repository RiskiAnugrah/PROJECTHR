using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AdminLTE1.Models;

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
                pb_db_ctx.cusp_insert_upah(s_tbl_salary.emp_id,s_tbl_salary.active_date_start,s_tbl_salary.active_date_end,s_tbl_salary.amount,Session("username"));

                return Json(new { status = true, remarks = "data berhasil ditambahkan" });
            }
            catch (Exception ex)
            {
                return Json(new { status = true, remarks = "gagal karena " + ex.ToString() });
            }
        }

    }
}