using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RestrictionsLimitPopup.DAL;

namespace RestrictionsLimitPopup.Installers
{
    public class DbInstaller : IInstaller
    {
        public void InstallServices ( IServiceCollection services, IConfiguration configuration )
        {
            services.AddDbContext<RestrictionLimitPopupDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("ProjectDbConnection")));
        }
    }
}
