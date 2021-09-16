using AdminLTE1.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AdminLTE1.Controllers
{
    public class ChartController : Controller
    {
        DB_FINGERDataContext pb_db_ctx;
        // GET: Chart
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult NewChart()
        {

            List<object> iData = new List<object>();
            //Creating sample data  
            DataTable dt = new DataTable();
            dt.Columns.Add("Group", System.Type.GetType("System.String"));
            dt.Columns.Add("Kg", System.Type.GetType("System.Double"));


            pb_db_ctx = new DB_FINGERDataContext();
            List<VW_DAILY_RESULT_GROUP> iData2 = pb_db_ctx.VW_DAILY_RESULT_GROUPs.ToList();
            DataRow dr = dt.NewRow();
           

            foreach (VW_DAILY_RESULT_GROUP dts in iData2) {
                dr = dt.NewRow();
                dr["Group"] = dts.kelompokdesc;
                dr["Kg"] = dts.QTY;
                dt.Rows.Add(dr);
            }
            //Looping and extracting each DataColumn to List<Object>  
            foreach (DataColumn dc in dt.Columns)
            {
                List<object> x = new List<object>();
                x = (from DataRow drr in dt.Rows select drr[dc.ColumnName]).ToList();
                iData.Add(x);
            }
            //Source data returned as JSON  
            return Json(iData, JsonRequestBehavior.AllowGet);

        }


        [HttpPost]
        public JsonResult AttendanceChart()
        {

            List<object> iData = new List<object>();
            //Creating sample data  
            DataTable dt = new DataTable();
            dt.Columns.Add("Group", System.Type.GetType("System.String"));
            dt.Columns.Add("person", System.Type.GetType("System.Int16"));


            pb_db_ctx = new DB_FINGERDataContext();
            List<VW_DAILY_GROUP_PERSON> iData2 = pb_db_ctx.VW_DAILY_GROUP_PERSONs.ToList();
            DataRow dr = dt.NewRow();


            foreach (VW_DAILY_GROUP_PERSON dts in iData2)
            {
                dr = dt.NewRow();
                dr["Group"] = dts.GROUP_BORONGAN;
                dr["person"] = dts.COUNTPERSON;
                dt.Rows.Add(dr);
            }
            //Looping and extracting each DataColumn to List<Object>  
            foreach (DataColumn dc in dt.Columns)
            {
                List<object> x = new List<object>();
                x = (from DataRow drr in dt.Rows select drr[dc.ColumnName]).ToList();
                iData.Add(x);
            }
            //Source data returned as JSON  
            return Json(iData, JsonRequestBehavior.AllowGet);

        }



        [HttpPost]
        public JsonResult MonthlyChart()
        {

            List<object> iData = new List<object>();
            //Creating sample data  
            DataTable dt = new DataTable();
            dt.Columns.Add("Group", System.Type.GetType("System.String"));
            dt.Columns.Add("Kg", System.Type.GetType("System.Double"));


            pb_db_ctx = new DB_FINGERDataContext();
            List<VW_MONHTLY_RESULT_GROUP> iData2 = pb_db_ctx.VW_MONHTLY_RESULT_GROUPs.ToList();
            DataRow dr = dt.NewRow();


            foreach (VW_MONHTLY_RESULT_GROUP dts in iData2)
            {
                dr = dt.NewRow();
                dr["Group"] = dts.kelompokdesc;
                dr["Kg"] = dts.QTY;
                dt.Rows.Add(dr);
            }
            //Looping and extracting each DataColumn to List<Object>  
            foreach (DataColumn dc in dt.Columns)
            {
                List<object> x = new List<object>();
                x = (from DataRow drr in dt.Rows select drr[dc.ColumnName]).ToList();
                iData.Add(x);
            }
            //Source data returned as JSON  
            return Json(iData, JsonRequestBehavior.AllowGet);

        }
    }
}