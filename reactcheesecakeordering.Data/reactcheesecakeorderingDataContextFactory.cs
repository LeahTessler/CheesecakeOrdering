using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reactcheesecakeordering.Data;

public class reactcheesecakeorderingDataContextFactory : IDesignTimeDbContextFactory<reactcheesecakeorderingDataContext>
{
    public reactcheesecakeorderingDataContext CreateDbContext(string[] args)
    {
        var config = new ConfigurationBuilder()
           .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), 
           $"..{Path.DirectorySeparatorChar}reactcheesecakeordering.Web"))
           .AddJsonFile("appsettings.json")
           .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

        return new reactcheesecakeorderingDataContext(config.GetConnectionString("ConStr"));
    }
}