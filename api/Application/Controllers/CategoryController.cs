using Microsoft.AspNetCore.Mvc;

namespace bennerGrife.Application.Controllers
{
    /// <summary>
    /// Controller para entidade de Category
    /// </summary>
    [Route("api/Category")]
    public class CategoryController
    {

        [HttpGet]
        [Route("GetCategories")]
        public string GetCategories()
        {
            return "teste";
        }
    }
}