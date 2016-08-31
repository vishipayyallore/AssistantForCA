using System.Collections.Generic;
using Accountants.Data.Store;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using Accountants.Data.Core.Model.ViewModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Accountants.Web.Api.Controllers
{

    [Route("api/[controller]")]
    public class ClientsController : Controller
    {

        private readonly AccountantsDbContext _dbContext;

        public ClientsController(AccountantsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            var clientsList = _dbContext.Clients.OrderBy(t => t.FullName).ToList();
            var response = new HttpResponseMessage(HttpStatusCode.OK) {Content = new ObjectContent<List<ClientViewModel>>(clientsList, new JsonMediaTypeFormatter())};

            if (!(clientsList.Count >0))
            {
                return NotFound();
            }
            return new ObjectResult(clientsList);

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
