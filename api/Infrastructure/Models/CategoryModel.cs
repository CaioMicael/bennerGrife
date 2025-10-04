using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace bennerGrife.Infrastructure.Models
{
    /// <summary>
    /// Modelo de categoria dos produtos
    /// </summary>
    public class CategoryModel
    {
        [Key]
        [DatabaseGenerated(databaseGeneratedOption: DatabaseGeneratedOption.Identity)]
        [Column("id")]
        public int Id { get; set; }

        [Required(ErrorMessage = "Nome da categoria é obrigatório")]
        [Column("name")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Descrição da categoria é obrigatório")]
        [Column("description")]
        public string Description { get; set; }

        [Column("", TypeName = "date")]
        public DateOnly Date { get; private set; } = DateOnly.FromDateTime(DateTime.Today);
    }
}