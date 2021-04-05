using System.Collections.Generic;
using System.Linq;

using ECommerceSPAWarningWidget.Common.Utilities;
using ECommerceSPAWarningWidget.DAL;
using ECommerceSPAWarningWidget.DAL.ShopifyModels;
using ECommerceSPAWarningWidget.ShopifyServices.Interfaces;

using Microsoft.EntityFrameworkCore;

using MultiLogger.Interfaces;
using MultiLogger.Model;

namespace ECommerceSPAWarningWidget.ShopifyServices
{
    public class ShopifyShopWarning : IShopifyShopWarning
    {
        private const string Component = "ShopifyShopWarning";
        private readonly ILogger<DetailedLogEntry> _logger;
        private readonly ECommerceSPAWarningWidgetDbContext _db;
        private readonly IShopify _shopifyShop;

        public ShopifyShopWarning ( ILogger<DetailedLogEntry> logger,
            ECommerceSPAWarningWidgetDbContext db,
            IShopify shopifyShop )
        {
            _logger = logger;
            _db = db;
            _shopifyShop = shopifyShop;
        }
        public ShopifyWarning AddWarning ( string shopWebsite, ShopifyWarning warningInfo )
        {
            _logger.Debug(ConstUtility.ShopifyServiceProject, ConstUtility.ActorCustomer, Component, ConstUtility.AddOperation, "Trying to add a new warning for {shopWebsite}", shopWebsite);
            var shop = _shopifyShop.GetShop(shopWebsite);

            warningInfo.ShopId = shop.Id;
            warningInfo.ShopifyBusiness = shop;

            _db.ShopifyWarning.Add(warningInfo);
            _db.SaveChanges();
            return warningInfo;
        }

        public bool DeleteWarning ( string shopWebsite, string warningId )
        {
            _logger.Debug(ConstUtility.ShopifyServiceProject, ConstUtility.ActorCustomer, Component, ConstUtility.DeleteOperation, "Trying to delete warning {warningId} for {shopWebsite}", warningId, shopWebsite);

            var warning = _db.ShopifyWarning
                .Include(shp => shp.ShopifyBusiness)
                .FirstOrDefault(warn => warn.ShopifyBusiness.Website.Equals(shopWebsite.ToLower()) && warn.Id.Equals(warningId));
            if (warning == null)
            {
                _logger.Warning(ConstUtility.ShopifyServiceProject, ConstUtility.ActorCustomer, Component, ConstUtility.DeleteOperation, "Didn't get record of business warning map for warning {warningId} for {shopWebsite}", warningId, shopWebsite);
                return false;
            }
            _db.ShopifyWarning.Remove(warning);
            _db.SaveChanges();
            return true;
        }

        public IEnumerable<ShopifyWarning> GetShopWarnings ( string shopWebsite )
        {
            _logger.Debug(ConstUtility.ShopifyServiceProject, ConstUtility.ActorCustomer, Component, ConstUtility.GetOperation, "Getting list of warning for {shopWebsite}", shopWebsite);
            return _db.ShopifyWarning
                .Include(shp => shp.ShopifyBusiness)
                .Where(shp => shp.ShopifyBusiness.Website.Equals(shopWebsite.ToLower()));
        }

        public ShopifyWarning GetWarningDetails ( string shopWebsite, string warningId )
        {
            _logger.Debug(ConstUtility.ShopifyServiceProject, ConstUtility.ActorCustomer, Component, ConstUtility.GetOperation, "Get warning {warningId} for {shopWebsite}", warningId, shopWebsite);

            return _db.ShopifyWarning.Include(warn => warn.ShopifyBusiness).FirstOrDefault(warn => warn.Id.Equals(warningId) && warn.ShopifyBusiness.Website.Equals(shopWebsite.ToLower()));
        }

        public ShopifyWarning UpdateWarning ( string shopWebsite, ShopifyWarning warning)
        {
            _logger.Debug(ConstUtility.ShopifyServiceProject, ConstUtility.ActorCustomer, Component, ConstUtility.UpdateOperation, "Update warning {warningId} for {shopWebsite}", warning.Id, shopWebsite);

            var existingWarning = _db.ShopifyWarning
                .Include(warn => warn.ShopifyBusiness)
                .FirstOrDefault(warn => warn.Id.Equals(warning.Id) && warn.ShopifyBusiness.Website.Equals(shopWebsite.ToLower()));

            _db.ShopifyWarning.Update(existingWarning);
            existingWarning.Category = warning.Category;
            existingWarning.CategoryInfo = warning.CategoryInfo;
            existingWarning.Name = warning.Name;
            existingWarning.Status = warning.Status;
            _db.SaveChanges();

            return existingWarning;
        }
    }
}
