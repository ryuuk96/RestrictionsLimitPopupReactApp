using System;

using ECommerceSPAWarningWidget.Common;
using ECommerceSPAWarningWidget.Common.Interfaces;
using ECommerceSPAWarningWidget.Installers;
using ECommerceSPAWarningWidget.ShopifyServices;
using ECommerceSPAWarningWidget.ShopifyServices.Interfaces;
using ECommerceSPAWarningWidget.Utility;
using ECommerceSPAWarningWidget.Utility.Interfaces;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using MultiLogger.Interfaces;
using MultiLogger.Model;

namespace ECommerceSPAWarningWidget
{
    public class Startup
    {
        public Startup ( IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private void UnhandledException ( object sender, UnhandledExceptionEventArgs e )
        {
            this.logger.UnhandledException((Exception)e.ExceptionObject);
        }

        private ILogger<DetailedLogEntry> logger { get; }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices ( IServiceCollection services )
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CORSPolicy", builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });

            services.AddControllersWithViews();

            services.AddHttpClient();

            // Configuring DbContext and 
            services.InstallServicesInAssembly(Configuration);

            #region DI
            // Shopify
            services.AddScoped<IShopify, ShopifyService>();
            services.AddScoped<IShopifyAppAuth, ShopifyAppAuth>();
            services.AddScoped<IShopifyApiService, ShopifyApi>();
            services.AddScoped<IShopifyShopWarning, ShopifyShopWarning>();
            services.AddScoped<IShopifyAPIHelper, ShopifyAPIHelper>();

            // Common
            services.AddScoped<IApiRequests, ApiRequests>();
            #endregion

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure ( IApplicationBuilder app, IWebHostEnvironment env )
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseCors("CORSPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
