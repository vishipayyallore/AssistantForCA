using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Accountants.Web.Portal.DataStore;
using Accountants.Web.Portal.DataStore.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Accountants.Web.Portal.Controllers.Api
{

    [Route("api/clients")]
    public class ClientsController : Controller
    {

        private readonly AccountantsDbContext _dbContext;

        public ClientsController(AccountantsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("")]
        public JsonResult Get()
        {
            var clientsList = _dbContext.Clients.OrderBy(t => t.FullName).ToList();
            //var results = clientsList.ToList();

            return Json(clientsList);
        }

        public JsonResult Post(string tripName, [FromBody] ClientViewModel vm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    //Adding Unique GUID for each row.
                    vm.Id = Guid.NewGuid().ToString("N");
                    _dbContext.Clients.Add(vm);
                    _dbContext.SaveChanges();
                    Response.StatusCode = (int)HttpStatusCode.Created;
                    return Json("Added the New Client");
                }
            }
            catch (Exception ex)
            {
                //_logger.LogError("Failed to save new trip", ex);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { Message = ex.Message });
            }

            Response.StatusCode = (int)HttpStatusCode.BadRequest;
            return Json(new { Message = "Failed", ModelState = ModelState });
        }

    }
}
