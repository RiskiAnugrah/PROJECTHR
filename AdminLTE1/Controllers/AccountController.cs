using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AdminLTE1.Models;
using System.Web.Security;
using AdminLTE1.Security;
using Kendo.DynamicLinq;

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

        [SessionCheck]
        public ActionResult FrmListUser()
        {
            return View();
        }

        [HttpPost]
        public ActionResult listuser(int take, int skip, IEnumerable<Kendo.DynamicLinq.Sort> sort, Kendo.DynamicLinq.Filter filter)
        {
            try
            {
                IQueryable<VW_M_USER> i_tbl_t;

                dbctx = new DB_FINGERDataContext();
                
                    i_tbl_t = dbctx.VW_M_USERs;


              
                return Json(i_tbl_t.ToDataSourceResult(take, skip, sort, filter));
            }
            catch (Exception ex)
            {
                return this.Json(ex);
            }
        }


        [HttpPost]
        public ActionResult edituser(VW_M_USER s_tbl)
        {
            try
            {
                dbctx = new DB_FINGERDataContext();

                TBL_M_USER i_tbl =dbctx.TBL_M_USERs.Where(o => o.id.Equals(s_tbl.id)).FirstOrDefault();
                i_tbl.password = s_tbl.password;
                i_tbl.akses = s_tbl.akses;


                dbctx.SubmitChanges();

                return Json(new { remarks = "data berhasil diubah", STATUS = true });
            }
            catch (Exception ex)
            {
                return Json(new { remarks = ex.ToString(), STATUS = false });
            }
        }

        [HttpPost]
        public ActionResult insertuser(TBL_M_USER s_tbl_m_vendor)
        {
            try
            {
                dbctx = new DB_FINGERDataContext();

                TBL_M_USER i_tbl_m_vendor = new TBL_M_USER();
                i_tbl_m_vendor.username = s_tbl_m_vendor.username;
                i_tbl_m_vendor.password = s_tbl_m_vendor.password;

                i_tbl_m_vendor.akses = s_tbl_m_vendor.akses;

                dbctx.TBL_M_USERs.InsertOnSubmit(i_tbl_m_vendor);
                dbctx.SubmitChanges();

                return Json(new { remarks = "data berhasil ditambahkan", STATUS = true });
            }
            catch (Exception ex)
            {
                return Json(new { remarks = ex.ToString(), STATUS = false });
            }
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
                        Session["AKSES"] = data.akses.ToString().ToUpper();

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