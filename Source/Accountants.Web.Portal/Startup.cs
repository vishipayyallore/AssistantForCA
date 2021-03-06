﻿using Accountants.Web.Portal.DataStore;
using Accountants.Web.Portal.DataStore.ViewModels;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;

namespace Accountants.Web.Portal
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services
                .AddMvc()
                .AddJsonOptions(opt =>
                {
                    opt.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                });

            // Add functionality to inject IOptions<T>
            services.AddOptions();

            // Add our Config object so it can be injected
            services.Configure<ApplicationDetails>(Configuration.GetSection("ApplicationDetails"));

            // *If* you need access to generic IConfiguration this is **required**
            //services.AddSingleton<IConfiguration>(_ => Configuration);
            //services.AddSingleton(new ApplicationDetails());
            //services.AddSingleton<IConfiguration>(provider => Configuration);
            //services.AddSingleton<ApplicationDetails>(Configuration.GetSection("ApplicationDetails") as ApplicationDetails);
            services.AddSingleton<IConfiguration>(Configuration);

            const string connection = @"Server=(localdb)\mssqllocaldb;Database=psmca;Trusted_Connection=True;";
            services.AddDbContext<AccountantsDbContext>(options => options.UseSqlServer(connection));


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute("spa-routes", "{*anything}", new { controller = "Home", action = "Index" });
            });

            
        }
    }
}
