using LembretesApp.Models;
using Microsoft.EntityFrameworkCore;

namespace LembretesApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Lembrete> Lembretes { get; set; }
    }
}
