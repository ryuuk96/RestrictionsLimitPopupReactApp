using System.Threading.Tasks;

using ECommerceSPAWarningWidget.ShopifyServices.Interfaces;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using Utilities.Helpers.Interfaces;

namespace ECommerceSPAWarningWidget.Controllers
{
    public class ShopifyAppController : Controller
    {
        private readonly IShopifyAppAuth _shopifyAuth;
        private readonly IRandomGenerator _randomGenerator;
        private readonly IConfiguration _configuration;

        public ShopifyAppController ( IShopifyAppAuth shopifyAppAuth,
            IConfiguration configuration,
            IRandomGenerator randomGenerator )
        {
            _shopifyAuth = shopifyAppAuth;
            _configuration = configuration;
            _randomGenerator = randomGenerator;
        }
        public async Task<IActionResult> Install ( string shop )
        {
            string nonce = _randomGenerator.RandomString(5);
            var storeNonceTask = _shopifyAuth.StoreShopNonce(shop, nonce);
            string redirectUrl = _shopifyAuth.GetRedirectUrl(shop, "ShopifyApp/Callback", new string[] { "read_products" }, nonce);

            await storeNonceTask;
            return Redirect(redirectUrl);
        }

        public async Task<IActionResult> Callback ( string code, string shop, string hmac, string state, long timestamp )
        {
            string nonce = _shopifyAuth.GetShopNonce(shop);
            if (!nonce.Equals(state)) return Unauthorized("Host value has incorrect state");

            bool validationResult = _shopifyAuth.ValidateShopInstall(shop, hmac, code, state, timestamp);
            if (!validationResult)
                return Unauthorized("Request not successfully validated by the server");
            
            await _shopifyAuth.StoreShopAccessToken(shop, code);
            string redirectUrl = _configuration["Shopify:URL"];

            // To load the application in embed mode
            Response.Headers.Add(_configuration["Shopify:IFrameResponseAllowHeader"], "deny");
            return Redirect(redirectUrl);
        }
    }
}
