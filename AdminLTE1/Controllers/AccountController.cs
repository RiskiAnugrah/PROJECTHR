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
    }
}