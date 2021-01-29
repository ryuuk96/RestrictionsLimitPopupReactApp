using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Logger.Extensions
{
    public static class HostingCustomLoggerExtension
    {
        public static IHostBuilder AddCustomLogger ( this IHostBuilder projectFramework )
        {
            projectFramework.LoadLoggerDependencies();

            projectFramework.AddCustomLoggerAbstractions();

            return projectFramework;
        }

        private static IHostBuilder LoadLoggerDependencies ( this IHostBuilder projectFramework )
        {
            return projectFramework;
        }
        
        private static IHostBuilder AddCustomLoggerAbstractions ( this IHostBuilder projectFramework )
        {
            projectFramework.ConfigureServices(( hostContext, services ) =>
            {
                services.Add(ServiceDescriptor.)
            });
            return projectFramework;
        }
    }
}
