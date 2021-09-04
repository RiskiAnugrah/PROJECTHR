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
        public ActionResult ReadEmployeeAutoComplete()
        {
            pb_db_ctx = new DB_FINGERDataContext();
            var i_tbl = pb_db_ctx.VW_KARYAWAN_AUTOCOMPLETEs.OrderBy(O => O.VALUE);
            return Json(i_tbl);

        }


        [HttpPost]
        public ActionResult ReadEmployeeAutoCompleteFilter(string filter)
        {
            pb_db_ctx = new DB_FINGERDataContext();
            var i_tbl = pb_db_ctx.VW_KARYAWAN_AUTOCOMPLETEs.Where(d=>d.DEPTNAME==filter).OrderBy(O => O.VALUE);
            return Json(i_tbl);

        }


        [HttpPost]
        public ActionResult listemployee(string paramst, int take, int skip, IEnumerable<Kendo.DynamicLinq.Sort> sort, Kendo.DynamicLinq.Filter filter)
        {
            try
            {
                IQueryable<VW_MASTER_SALARY> i_tbl_t;

                pb_db_ctx = new DB_FINGERDataContext();
                if (paramst == "")
                {
                    i_tbl_t = pb_db_ctx.VW_MASTER_SALARies.OrderBy(o => o.NAME);

                }
              
                else if (paramst == "PT.PMS")
                {
                    i_tbl_t = pb_db_ctx.VW_MASTER_SALARies.OrderBy(o => o.NAME);

                }
                else {
                    i_tbl_t = pb_db_ctx.VW_MASTER_SALARies.Where(t => t.GROUPS == paramst).OrderBy(o => o.NAME);


                }
                return Json(i_tbl_t.ToDataSourceResult(take, skip, sort, filter));
            }
            catch (Exception ex)
            {
                return this.Json(ex);
            }
        }

        [HttpPost]
        public ActionResult listemployeeborongan(string paramst, int take, int skip, IEnumerable<Kendo.DynamicLinq.Sort> sort, Kendo.DynamicLinq.Filter filter)
        {
            try
            {
                IQueryable<VW_MASTER_SALARY> i_tbl_t;

                pb_db_ctx = new DB_FINGERDataContext();
                if (paramst == "")
                {
                    i_tbl_t = pb_db_ctx.VW_MASTER_SALARies.OrderBy(o => o.NAME);

                }

                else
                {
                    i_tbl_t = pb_db_ctx.VW_MASTER_SALARies.Where(t => t.GROUP_BORONGAN == paramst).OrderBy(o => o.NAME);


                }
                return Json(i_tbl_t.ToDataSourceResult(take, skip, sort, filter));
            }
            catch (Exception ex)
            {
                return this.Json(ex);
            }
        }


        [HttpPost]
        public ActionResult updategroupnotes(VW_MASTER_SALARY usr)
        {
            try
            {
                pb_db_ctx = new DB_FINGERDataContext();

                USERINFO i_tbl = pb_db_ctx.USERINFOs.Where(o => o.USERID.Equals(usr.USERID)).FirstOrDefault();
                i_tbl.GROUP_BORONGAN = usr.GROUP_BORONGAN;



                pb_db_ctx.SubmitChanges();

                return Json(new { remarks = "data berhasil diubah", STATUS = true });
            }
            catch (Exception ex)
            {
                return Json(new { remarks = ex.ToString(), STATUS = false });
            }
        }
    }
}