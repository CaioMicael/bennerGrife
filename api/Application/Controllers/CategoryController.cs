using api.Core.Common;
using api.Domain.Errors;
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
        public Result<string> GetCategories()
        {
            //return Result<string>.ReturnResult("sucesso", StatusCodes.Status200OK);
            return Result<string>.Failure(DomainError.Unauthorized);
        }
    }
}