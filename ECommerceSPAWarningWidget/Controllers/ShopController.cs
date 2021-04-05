
using System.Threading.Tasks;

using ECommerceSPAWarningWidget.Common.Interfaces;
using ECommerceSPAWarningWidget.ShopifyServices.Interfaces;
using ECommerceSPAWarningWidget.Utility.Interfaces;

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
        private readonly IShopifyAPIHelper _shopifyHelper;
        private readonly IConfiguration _configuration;
        private const string BaseAddress = "https://{0}";

        public ShopController ( IApiRequests apiRequests,
            ILogger<DetailedLogEntry> logger,
            IShopifyAPIHelper shopifyAPIHelper,
            IShopifyAppAuth shopifyAppAuth,
            IConfiguration configuration )
        {
            _apiRequest = apiRequests;
            _logger = logger;
            _shopifyHelper = shopifyAPIHelper;
            _shopifyAuth = shopifyAppAuth;
            _configuration = configuration;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> ShopDetails ( [FromHeader] string referer, [FromHeader] string cookie )
        {
            string shopWebsite = _shopifyHelper.ShopWebsiteFromHeader(cookie, referer);
            if(!(shopWebsite.Length > 0))
                return BadRequest("Shop origin not passed as part of the request");

            string accessToken = _shopifyAuth.GetShopAccessToken(shopWebsite);
            var queryValuePair = new System.Collections.Generic.Dictionary<string, string>() { { _configuration["Shopify:ApiRequestHeader"], accessToken } };

            string shopDetailJson = await _apiRequest.GET(GetShopifyBaseAddress(shopWebsite), "/admin/api/2021-01/shop.json", null, queryValuePair);
            return Ok(shopDetailJson);
        }

        private string GetShopifyBaseAddress ( string url ) => string.Format(BaseAddress, url);
    }
}
