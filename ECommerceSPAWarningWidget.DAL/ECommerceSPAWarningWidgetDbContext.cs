using Microsoft.EntityFrameworkCore;

using ECommerceSPAWarningWidget.DAL.ShopifyModels;

namespace ECommerceSPAWarningWidget.DAL
{
    public class ECommerceSPAWarningWidgetDbContext: DbContext
    {
        public ECommerceSPAWarningWidgetDbContext (DbContextOptions<ECommerceSPAWarningWidgetDbContext> options): base(options) { }

        public DbSet<ShopifyBusiness> ShopifyBusiness { get; set; }
        public DbSet<ShopifyBusinessSubscription> ShopifyBusinessSubscription { get; set; }
        public DbSet<ShopifySubscription> ShopifySubscription { get; set; }
        public DbSet<ShopifyApiAccess> ShopifyApiAccess { get; set; }
    }
}
