using api.Core.Common;
using api.Domain.Errors;
using Microsoft.AspNetCore.Mvc;

namespace api.Application.Controllers
{
    [Route("api/Auth/")]
    public class AuthController : ControllerBase
    {
        [HttpGet]
        public Result<string> GetTest()
        {
            return Result<string>.Failure(DomainError.GenericNotFound);
        }
    }
}