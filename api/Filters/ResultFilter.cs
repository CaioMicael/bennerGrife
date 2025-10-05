using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using api.Domain.Interfaces;

namespace api.middlewares
{
    /// <summary>
    /// Classe middleware que intercepta o retorno result do controller e retorna um IActionResult
    /// <see cref="IResult"/>
    /// </summary>
    public class ResultFilter : IAsyncResultFilter
    {
        /// <summary>
        /// Ao retornar o ActionResult para o usuário, será validado se foi definido um result para ele.
        /// Se sim, será utilizado o result definido, desta forma o controller não precisa se preocupar
        /// com status code, mas sim apenas orquestrar as chamadas.
        /// </summary>
        /// <param name="context">ResultExecutingContext</param>
        /// <param name="next">ResultExecutionDelegate</param>
        /// <returns></returns>
        public async Task OnResultExecutionAsync(ResultExecutingContext context, ResultExecutionDelegate next)
        {
            if (context.Result is ObjectResult objectResult && objectResult.Value is IResultBase result)
            {
                context.Result = new ObjectResult(result);
            }

            await next();
        }
    }
}