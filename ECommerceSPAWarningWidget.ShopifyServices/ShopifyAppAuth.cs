using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

using ECommerceSPAWarningWidget.DAL;
using ECommerceSPAWarningWidget.DAL.ShopifyModels;
using ECommerceSPAWarningWidget.ShopifyServices.Interfaces;

using Microsoft.Extensions.Configuration;

using Utilities.Extensions;

namespace ECommerceSPAWarningWidget.ShopifyServices
{
    public class ShopifyAppAuth : IShopifyAppAuth
    {
        private readonly IConfiguration _configuration;
        private readonly IShopifyApiService _shopifyApi;
        private readonly ECommerceSPAWarningWidgetDbContext _db;

        public ShopifyAppAuth ( IConfiguration configuration, ECommerceSPAWarningWidgetDbContext db, IShopifyApiService shopifyApi )
        {
            _configuration = configuration;
            _db = db;
            _shopifyApi = shopifyApi;
        }
        public string GetRedirectUrl ( string shop, string callbackApiRoute, string[] scopes, string nonce )
        {
            return GetRedirectUrl(shop, callbackApiRoute, scopes, nonce, new string[] { "per_user" });
        }
        public string GetRedirectUrl ( string shop, string callbackApiRoute, string[] scopes, string nonce, string[] grantOptions )
        {
            string installPromptUrl =
                string.Format("https://{0}/admin/oauth/authorize?client_id={1}&scope={2}&redirect_uri={3}&state={4}&grant_options[]={5}", shop, _configuration["Shopify:ApiKey"], scopes.ToDelimitedString(), string.Concat(_configuration["Shopify:URL"], callbackApiRoute), nonce, grantOptions.ToDelimitedString());
            return installPromptUrl;
        }

        public string GetShopNonce ( string shop )
        {
            string shopName = shop.Replace(".myshopify.com", string.Empty).ToLower();
            shop = shop.ToLower();

            ShopifyBusiness bus = _db.ShopifyBusiness.FirstOrDefault(bus => bus.Name.Equals(shopName) && bus.Website.Equals(shop));
            return bus == null ? string.Empty : bus.Nonce;
        }

        public async Task StoreShopAccessToken ( string shop, string authorizationCode )
        {
            var shopifyAccessModel = await _shopifyApi.GetApiAccess(shop, authorizationCode);
            ShopifyApiAccess apiAccess = new()
            {
                AccessSopeArray = shopifyAccessModel.AccessScopeArray,
                AccessToken = shopifyAccessModel.AccessToken,
                ApiResponse = shopifyAccessModel.ApiResponse,
                ExpiryInSeconds = shopifyAccessModel.ExpiryInSec
            };
            _db.ShopifyApiAccess.Add(apiAccess);
            await _db.SaveChangesAsync();
        }

        public Task StoreShopNonce ( string shop, string nonce )
        {
            string shopName = shop.Replace(".myshopify.com", string.Empty).ToLower();
            shop = shop.ToLower();

            ShopifyBusiness business = _db.ShopifyBusiness
                .FirstOrDefault(bus => bus.Name.Equals(shopName)
                && bus.Website.Equals(shop));

            if (business == null)
            {
                business= new ShopifyBusiness()
                {
                    IsRegistered = false,
                    Name = shopName,
                    Nonce = nonce,
                    Website = shop
                };
                _db.ShopifyBusiness.Add(business);
            }
            else
            {
                _db.ShopifyBusiness.Update(business);
                business.Nonce = nonce;
                business.IsRegistered = false;
            }

            return _db.SaveChangesAsync();
        }

        public bool ValidateShopInstall ( string shop, string hmac, string authorizationCode, string state, long timestamp )
        {
            if (string.IsNullOrWhiteSpace(shop) || string.IsNullOrWhiteSpace(hmac) || string.IsNullOrWhiteSpace(authorizationCode))
                return false;

            // Made first check for the shop domain name
            if (!Regex.IsMatch(shop, "^[a-zA-Z0-9][a-zA-Z0-9-]*.myshopify.com"))
                return false;

            string message = string.Format("code={0}&shop={1}&state={2}&timestamp={3}", authorizationCode, shop, state, timestamp);

            byte[] secretKeyBytes = Encoding.UTF8.GetBytes(_configuration["Shopify:SecretApiKey"]);
            byte[] messageBytes = Encoding.UTF8.GetBytes(message);

            HMACSHA256 hmac256 = new HMACSHA256(secretKeyBytes);
            byte[] hashedMsg = hmac256.ComputeHash(messageBytes);

            var digest = BitConverter.ToString(hashedMsg).Replace("-", "");
            return digest.Equals(hmac, StringComparison.OrdinalIgnoreCase);

        }
    }
}
