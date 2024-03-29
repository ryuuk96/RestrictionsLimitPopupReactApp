
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using MultiLogger.Extensions;
using MultiLogger.Model;
using MultiLogger.Writers;

using Utilities.Helpers.Extensions;

namespace ECommerceSPAWarningWidget
{
    public class Program
    {
        public static void Main ( string[] args )
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder ( string[] args ) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureServices(services =>
                {
                    services.Configure<FileLoggerOptions>(LoggerProcessor.LoggerConfiguration.GetSection("File"));
                    services.AddCustomObjLogger<DetailedLogEntry, FileLogger>();
                    services.AddUtilities();
                })
                .AddWebhostCustomLogger()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
