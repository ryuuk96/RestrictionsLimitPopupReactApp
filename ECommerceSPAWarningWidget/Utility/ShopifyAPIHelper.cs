using System.Web;

using ECommerceSPAWarningWidget.Common.Utilities;
using ECommerceSPAWarningWidget.Utility.Interfaces;

using MultiLogger.Interfaces;
using MultiLogger.Model;

namespace ECommerceSPAWarningWidget.Utility
{
    public class ShopifyAPIHelper : IShopifyAPIHelper
    {
        private readonly ILogger<DetailedLogEntry> _logger;

        public ShopifyAPIHelper ( ILogger<DetailedLogEntry> logger )
        {
            _logger = logger;
        }
        public string ShopWebsiteFromHeader ( string cookie, string referer )
        {
            if (!(cookie.Contains(".myshopify.com") || referer.Contains(".myshopify.com")))
            {
                _logger.Debug(ConstUtility.ECommerceSPAWarningWidgetProject, ConstUtility.ActorShopify, "ShopifyAPIHelper", ConstUtility.GetOperation, "Shop origin was not provided in the header for the request to get shop details");
                return string.Empty;
            }
            return cookie.Contains(".myshopify.com") ?
                cookie.Replace("shopOrigin=", string.Empty) :
                HttpUtility.ParseQueryString(referer).Get("shop");
        }
    }
}
