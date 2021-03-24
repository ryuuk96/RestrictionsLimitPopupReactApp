
using ECommerceSPAWarningWidget.DAL;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ECommerceSPAWarningWidget.Installers
{
    public class DbInstaller : IInstaller
    {
        public void InstallServices ( IServiceCollection services, IConfiguration configuration )
        {
            services.AddDbContext<ECommerceSPAWarningWidgetDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("ProjectDbConnection")));
        }
    }
}
