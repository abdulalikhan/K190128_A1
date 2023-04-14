using Microsoft.AspNetCore.Mvc;

namespace K190128_A1.Controllers
{
    public class CertificationsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
