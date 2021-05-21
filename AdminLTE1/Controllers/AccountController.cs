using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AdminLTE1.Models;
using System.Web.Security;

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
            DB_FINGERDataContext i_obj_ctx = new DB_FINGERDataContext();


          
                var list_user = i_obj_ctx.VW_M_USERs.Where(u => u.username.Equals(pnrp)).Where(u=>u.password==password).ToList();

                if (list_user.Count() > 0)
                {
                    foreach (var data in list_user)
                    {

                        Session["USERNAME"] = data.username;
                        Session["NAMA"] = data.NAME;
                        Session["DEPT"] = data.DEPTNAME;
                        Session["DEPT_DESC"] = data.DEPTNAME.ToString().ToUpper();

                    }

                    return RedirectToAction("Index", "account");

                }
                else
                {
                    Response.Write("<script> alert('Login Failed');</script>");
                     return RedirectToAction("Index", "account");
            }
            

           



        }


        public ActionResult LogOff()
        {
            Session.Clear();
            Session.RemoveAll();

            FormsAuthentication.SignOut();
            return this.RedirectToAction("Index", "ACCOUNT");
        }


        public ActionResult ReadAkses(string username)
        {
            try
            {
                var list_akses = dbctx.VW_M_USERs.Where(u => u.username.Equals(username)).ToList();
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