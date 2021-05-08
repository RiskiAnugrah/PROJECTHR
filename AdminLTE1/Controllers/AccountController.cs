using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AdminLTE1.Models;

namespace AdminLTE1.Controllers
{
    public class AccountController : Controller
    {

        DB_FINGERDataContext dbctx = new DB_FINGERDataContext();
        // GET: Account
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetUser(string pnrp = "", string password = "")
        {
            LTS_DB_HRIS_TIKETDataContext i_obj_ctx = new LTS_DB_HRIS_TIKETDataContext();


            if (ADCekValidUser(pnrp, password) == true)
            {
                var list_user = i_obj_ctx.VW_M_USER_APPs.Where(u => u.NRP.Equals(pnrp.Substring(1, pnrp.Length - 1))).ToList();

                if (list_user.Count() > 0)
                {
                    foreach (var data in list_user)
                    {

                        Session["NRP"] = data.NRP;
                        Session["NAMA"] = data.NAME;
                        Session["DEPT"] = data.DEPT_CODE;
                        Session["DEPT_DESC"] = data.DEPT_DESC.ToString().ToUpper();

                    }

                    return RedirectToAction("Index", "LOGIN");

                }
                else
                {
                    Response.Write("<script> alert('Login Failed');</script>");

                }
            }

            return RedirectToAction("Index", "LOGIN");



        }


        public ActionResult LogOff()
        {
            Session.Clear();
            Session.RemoveAll();

            FormsAuthentication.SignOut();
            return this.RedirectToAction("Index", "Login");
        }


        public ActionResult ReadAkses(string nrp)
        {
            try
            {
                var list_akses = p_ctx_db.VW_M_USER_APPs.Where(u => u.NRP.Equals(nrp)).ToList();
                return Json(new { Total = list_akses.Count(), Data = list_akses });
            }

            catch (Exception e)
            {
                return this.Json(new { error = e.ToString() }, JsonRequestBehavior.AllowGet);
            }

        }


        [HttpPost]
        public ActionResult GetAkses(string id_desc, string desc)
        {


            Session["akses_pid"] = id_desc;
            Session["akses_desc"] = desc;

            return RedirectToAction("Index", "REQUEST");


        }


        public ActionResult Profiles()
        {
            return this.RedirectToAction("Index", "LOGIN");
        }
    }
}