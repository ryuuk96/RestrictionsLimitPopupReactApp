using System;
using System.Linq;

using ECommerceSPAWarningWidget.Common.Utilities;
using ECommerceSPAWarningWidget.DAL;
using ECommerceSPAWarningWidget.DAL.ShopifyModels;
using ECommerceSPAWarningWidget.ShopifyServices.Interfaces;

using MultiLogger.Interfaces;
using MultiLogger.Model;

namespace ECommerceSPAWarningWidget.ShopifyServices
{
    public class ShopifyService : IShopify
    {
        private readonly ILogger<DetailedLogEntry> _logger;
        private readonly ECommerceSPAWarningWidgetDbContext _db;

        public ShopifyService ( ILogger<DetailedLogEntry> logger,
            ECommerceSPAWarningWidgetDbContext db )
        {
            _logger = logger;
            _db = db;
        }
        public ShopifyBusiness GetShop ( string shopWebsite )
        {
            string shopName = GetShopName(shopWebsite);
            ShopifyBusiness shop = _db.ShopifyBusiness.FirstOrDefault(bus => bus.Name.Equals(shopName) || bus.Website.Equals(shopWebsite));
            if (shop == null)
            {
                _logger.Error(ConstUtility.ShopifyServiceProject, ConstUtility.ActorShopify, "ShopifyService", ConstUtility.GetOperation, "Getting shop with the website {shopSite}", shop);
                throw new InvalidOperationException("Shop was not found in the shopify db");
            }
            return shop;
        }

        public string GetShopName ( string shopWebsite ) =>
            shopWebsite
                .Replace("http://", string.Empty)
                .Replace("https://", string.Empty)
                .Replace(".myshopify.com", string.Empty)
                .ToLower();

        public bool RegisteredShopExists ( string shopWebsite )
        {
            try
            {
                ShopifyBusiness business = _db.ShopifyBusiness.FirstOrDefault(shp => shp.Website.Equals(shopWebsite.ToLower()));
                if (business == null) return false;
                return business.IsRegistered;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool ShopExists ( string shopWebsite ) =>
            _db.ShopifyBusiness.FirstOrDefault(shp => shp.Website.Equals(shopWebsite.ToLower())) != null;
    }
}
