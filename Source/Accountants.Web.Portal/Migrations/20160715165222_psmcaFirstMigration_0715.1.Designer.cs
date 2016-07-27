using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Accountants.Web.Portal.DataStore;

namespace Accountants.Web.Portal.Migrations
{
    [DbContext(typeof(AccountantsDbContext))]
    [Migration("20160715165222_psmcaFirstMigration_0715.1")]
    partial class psmcaFirstMigration_07151
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Accountants.Web.Portal.DataStore.ViewModels.ClientViewModel", b =>
                {
                    b.Property<string>("Id");

                    b.Property<string>("ClientType");

                    b.Property<string>("CurrentYearStatus");

                    b.Property<string>("EmailId");

                    b.Property<string>("FatherFullName");

                    b.Property<string>("FileNumber");

                    b.Property<string>("FullName");

                    b.Property<string>("LandLinePhone");

                    b.Property<string>("LastFilingYear");

                    b.Property<string>("NatureOfBusiness");

                    b.Property<string>("PanNumber");

                    b.Property<string>("ResouceName");

                    b.Property<string>("Telephone");

                    b.HasKey("Id");

                    b.ToTable("Clients");
                });
        }
    }
}
