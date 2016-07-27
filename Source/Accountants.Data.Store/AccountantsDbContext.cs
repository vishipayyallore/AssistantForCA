using Accountants.Data.Core.Model.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace Accountants.Data.Store
{
    public class AccountantsDbContext : DbContext
    {
        public AccountantsDbContext(DbContextOptions<AccountantsDbContext> options)
            : base(options)
        { }

        public DbSet<ClientViewModel> Clients { get; set; }
    }
}
