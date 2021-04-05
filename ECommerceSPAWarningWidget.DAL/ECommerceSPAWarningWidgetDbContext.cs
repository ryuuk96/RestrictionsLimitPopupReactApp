using ECommerceSPAWarningWidget.DAL.ShopifyModels;

using Microsoft.EntityFrameworkCore;

namespace ECommerceSPAWarningWidget.DAL
{
    public class ECommerceSPAWarningWidgetDbContext : DbContext
    {
        public ECommerceSPAWarningWidgetDbContext ( DbContextOptions<ECommerceSPAWarningWidgetDbContext> options ) : base(options) { }

        public DbSet<ShopifyBusiness> ShopifyBusiness { get; set; }
        public DbSet<ShopifyBusinessSubscription> ShopifyBusinessSubscription { get; set; }
        public DbSet<ShopifySubscription> ShopifySubscription { get; set; }
        public DbSet<ShopifyApiAccess> ShopifyApiAccess { get; set; }

        public DbSet<ShopifyWarning> ShopifyWarning { get; set; }
    }
}
