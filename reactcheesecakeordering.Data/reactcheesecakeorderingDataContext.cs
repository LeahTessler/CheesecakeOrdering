using Microsoft.EntityFrameworkCore;

namespace reactcheesecakeordering.Data;

public class reactcheesecakeorderingDataContext : DbContext
{
    private readonly string _connectionString;

    public reactcheesecakeorderingDataContext(string connectionString)
    {
        _connectionString = connectionString;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(_connectionString);
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
        {
            relationship.DeleteBehavior = DeleteBehavior.Restrict;
        }
    }

    public DbSet<CheesecakeOrder> Orders { get; set; }
}