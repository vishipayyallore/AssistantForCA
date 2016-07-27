using Microsoft.AspNetCore.Mvc;

namespace Accountants.Web.Portal.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
