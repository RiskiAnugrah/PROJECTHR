using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AdminLTE1.Models;
using Kendo.DynamicLinq;

namespace AdminLTE1.Controllers
{
    public class EmployeeController : Controller
    {
        DB_FINGERDataContext pb_db_ctx;
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Frm_view_karyawan()
        {
            return View();
        }

        [HttpPost]
        public ActionResult listemployee(int take, int skip, IEnumerable<Kendo.DynamicLinq.Sort> sort, Kendo.DynamicLinq.Filter filter)
        {
            try
            {


                pb_db_ctx = new DB_FINGERDataContext();
                IQueryable<VW_KARYAWAN_ALL> i_tbl_t = pb_db_ctx.VW_KARYAWAN_ALLs.OrderBy(o => o.NAME);

                return Json(i_tbl_t.ToDataSourceResult(take, skip, sort, filter));
            }
            catch (Exception ex)
            {
                return this.Json(ex);
            }
        }
    }
}