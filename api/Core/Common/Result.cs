using api.Domain.Errors;
using api.Domain.Interfaces;

namespace api.Core.Common
{
    /// <summary>
    /// Clase comum para retorno de resultados
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class Result<T> : IResultBase
    {
        public T? Value { get; }
        public int StatusCode { get; }
        public DomainError? Error { get; }

        private Result(T? value, DomainError? error, int statusCode = StatusCodes.Status200OK)
        {
            Value = value;
            StatusCode = statusCode;
            Error = error;
        }

        /// <summary>
        /// Retorna um resultado padronizado da API
        /// </summary>
        /// <param name="value">Valor a ser retornado (pode ser qualquer type)</param>
        /// <param name="statusCode">Status code a ser retornado</param>
        /// <returns>Result failure</returns>
        public static Result<T> ReturnResult(T? value, int statusCode = StatusCodes.Status200OK) =>
            new(value, null, statusCode);

        /// <summary>
        /// Retorna um erro ocorrido.
        /// </summary>
        /// <param name="error">Deve ser passado um domain error conhecido</param>
        /// <returns>Result failure</returns>
        public static Result<T> Failure(DomainError error) =>
            new(default, error, error.StatusCode);

        object IResultBase.GetValue() => Value;
    }
}