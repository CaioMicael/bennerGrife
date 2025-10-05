using api.Domain.Errors;

namespace api.Domain.Interfaces
{
    /// <summary>
    /// Interface para retorno de resultados da API
    /// </summary>
    public interface IResultBase
    {
        /// <summary>
        /// Indica o status code a ser retornado
        /// </summary>
        public int StatusCode { get; }

        DomainError Error { get; }
        object GetValue();
    }
}