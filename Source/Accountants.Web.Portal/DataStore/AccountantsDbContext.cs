using Accountants.Web.Portal.DataStore.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace Accountants.Web.Portal.DataStore
{
    public class AccountantsDbContext : DbContext
    {
        public AccountantsDbContext(DbContextOptions<AccountantsDbContext> options)
            : base(options)
        { }

        public DbSet<ClientViewModel> Clients { get; set; }
    }
}
