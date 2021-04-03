
using System.Threading.Tasks;
using System.Web;

using ECommerceSPAWarningWidget.Common;
using ECommerceSPAWarningWidget.Common.Interfaces;
using ECommerceSPAWarningWidget.Common.Utilities;
using ECommerceSPAWarningWidget.ShopifyServices.Interfaces;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using MultiLogger.Interfaces;
using MultiLogger.Model;

namespace ECommerceSPAWarningWidget.Controllers
{
    [Route("api/[controller]")]
    public class ShopController : Controller
    {
        private readonly IApiRequests _apiRequest;
        private readonly ILogger<DetailedLogEntry> _logger;
        private readonly IShopifyAppAuth _shopifyAuth;
        private readonly IConfiguration _configuration;
        private const string BaseAddress = "https://{0}";

        public ShopController ( IApiRequests apiRequests,
            ILogger<DetailedLogEntry> logger,
            IShopifyAppAuth shopifyAppAuth,
            IConfiguration configuration )
        {
            _apiRequest = apiRequests;
            _logger = logger;
            _shopifyAuth = shopifyAppAuth;
            _configuration = configuration;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> ShopDetails ( [FromHeader] string referer, [FromHeader] string cookie )
        {
            if (!(cookie.Contains(".myshopify.com") || referer.Contains(".myshopify.com")))
            {
                _logger.Debug(ConstUtility.ECommerceSPAWarningWidgetProject, ConstUtility.ActorShopify, "ShopController", ConstUtility.GetOperation, "Shop origin was not provided in the header for the request to get shop details");
                return BadRequest("Shop origin not passed as part of the request");
            }
            string shopWebsite = cookie.Contains(".myshopify.com") ?
                cookie.Replace("shopOrigin=", string.Empty) :
                HttpUtility.ParseQueryString(referer).Get("shop");

            string accessToken = _shopifyAuth.GetShopAccessToken(shopWebsite);
            var queryValuePair = new System.Collections.Generic.Dictionary<string, string>() { { _configuration["Shopify:ApiRequestHeader"], accessToken } };

            string shopDetailJson = await _apiRequest.GET(GetShopifyBaseAddress(shopWebsite), "/admin/api/2021-01/shop.json", null, queryValuePair);
            return Ok(shopDetailJson);
        }



        private string GetShopifyBaseAddress ( string url )
        {
            return string.Format(BaseAddress, url);
        }
    }
}
