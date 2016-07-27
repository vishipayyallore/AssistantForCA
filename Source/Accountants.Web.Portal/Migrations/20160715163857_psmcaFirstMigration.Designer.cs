using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Accountants.Web.Portal.DataStore;

namespace Accountants.Web.Portal.Migrations
{
    [DbContext(typeof(AccountantsDbContext))]
    [Migration("20160715163857_psmcaFirstMigration")]
    partial class psmcaFirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Accountants.Web.Portal.DataStore.ViewModels.ClientViewModel", b =>
                {
                    b.Property<string>("Id");

                    b.Property<string>("FileNumber");

                    b.Property<string>("FullName");

                    b.HasKey("Id");

                    b.ToTable("Clients");
                });
        }
    }
}
