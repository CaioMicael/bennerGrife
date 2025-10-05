using Microsoft.EntityFrameworkCore;
using bennerGrife.Infrastructure.Models;

namespace bennerGrife.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){}

        public DbSet<CategoryModel> Category { get; set; }

    }
}