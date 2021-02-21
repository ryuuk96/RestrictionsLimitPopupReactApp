
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using MultiLogger.Extensions;
using MultiLogger.Model;
using MultiLogger.Writers;

namespace RestrictionsLimitPopup
{
    public class Program
    {
        public static void Main ( string[] args )
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder ( string[] args )
        {
            return Host.CreateDefaultBuilder(args)
                .ConfigureServices(services =>
                {
                    services.Configure<FileLoggerOptions>(LoggerProcessor.LoggerConfiguration.GetSection("File"));
                    services.AddCustomObjLogger<DetailedLogEntry, FileLogger>();
                })
                .AddWebhostCustomLogger()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
        }
    }
}
