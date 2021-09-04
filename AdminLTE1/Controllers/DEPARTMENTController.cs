    using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AdminLTE1.Models;

namespace AdminLTE1.Controllers
{
    public class DEPARTMENTController : Controller
    {

        DB_FINGERDataContext pb_db_ctx;
        // GET: DEPARTMENT
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ReadDept(string grp)
        {

            if (grp == "0") {
                pb_db_ctx = new DB_FINGERDataContext();
                var i_tbl = pb_db_ctx.VW_DEPARTMENTs.OrderBy(O => O.DEPTNAME);
                return Json(i_tbl);
            }
            else {
                int grpint = Int32.Parse(grp);
                pb_db_ctx = new DB_FINGERDataContext();
                var i_tbl = pb_db_ctx.VW_DEPARTMENTs.Where(d=>d.SUPDEPTID==grpint).OrderBy(O => O.DEPTNAME);
                return Json(i_tbl);
            }
        }

        [HttpPost]
        public ActionResult ReadGroup()
        {
            pb_db_ctx = new DB_FINGERDataContext();
            var i_tbl = pb_db_ctx.VW_GROUPs.OrderBy(O => O.DEPTNAME);
            return Json(i_tbl);

        }

        [HttpPost]
        public ActionResult ReadGroupBorongan()
        {
            pb_db_ctx = new DB_FINGERDataContext();
            var i_tbl = pb_db_ctx.VW_GROUP_BORONGANs.OrderBy(O => O.kelompokdesc);
            return Json(i_tbl);

        }
    }
}