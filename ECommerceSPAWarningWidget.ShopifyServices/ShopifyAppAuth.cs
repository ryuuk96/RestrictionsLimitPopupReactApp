using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

using ECommerceSPAWarningWidget.Common.Utilities;
using ECommerceSPAWarningWidget.DAL;
using ECommerceSPAWarningWidget.DAL.ShopifyModels;
using ECommerceSPAWarningWidget.ShopifyServices.Interfaces;

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

using MultiLogger.Interfaces;
using MultiLogger.Model;

using Utilities.Extensions;

namespace ECommerceSPAWarningWidget.ShopifyServices
{
    public class ShopifyAppAuth : IShopifyAppAuth
    {
        private readonly IConfiguration _configuration;
        private readonly IShopifyApiService _shopifyApi;
        private readonly IShopify _shopifyService;
        private readonly ILogger<DetailedLogEntry> _logger;
        private readonly ECommerceSPAWarningWidgetDbContext _db;

        private const string Component = "ShopifyAppAuth";


        public ShopifyAppAuth ( IConfiguration configuration,
            ECommerceSPAWarningWidgetDbContext db,
            IShopifyApiService shopifyApi,
            IShopify shopify,
            ILogger<DetailedLogEntry> logger )
        {
            _configuration = configuration;
            _db = db;
            _shopifyApi = shopifyApi;
            _shopifyService = shopify;
            _logger = logger;
        }

        public bool ValidateShopInstall ( string shopWebsite, string hmac, string authorizationCode, string state, long timestamp )
        {
            if (string.IsNullOrWhiteSpace(shopWebsite) || string.IsNullOrWhiteSpace(hmac) || string.IsNullOrWhiteSpace(authorizationCode))
                return false;

            // Made first check for the shop domain name
            if (!Regex.IsMatch(shopWebsite, "^[a-zA-Z0-9][a-zA-Z0-9-]*.myshopify.com"))
                return false;

            string message = string.Format("code={0}&shop={1}&state={2}&timestamp={3}", authorizationCode, shopWebsite, state, timestamp);

            byte[] secretKeyBytes = Encoding.UTF8.GetBytes(_configuration["Shopify:SecretApiKey"]);
            byte[] messageBytes = Encoding.UTF8.GetBytes(message);

            HMACSHA256 hmac256 = new HMACSHA256(secretKeyBytes);
            byte[] hashedMsg = hmac256.ComputeHash(messageBytes);

            var digest = BitConverter.ToString(hashedMsg).Replace("-", "");
            return digest.Equals(hmac, StringComparison.OrdinalIgnoreCase);
        }

        public string GetRedirectUrl ( string shopWebsite, string callbackApiRoute, string[] scopes, string nonce )
        {
            return GetRedirectUrl(shopWebsite, callbackApiRoute, scopes, nonce, new string[] { "per_user" });
        }
        public string GetRedirectUrl ( string shopWebsite, string callbackApiRoute, string[] scopes, string nonce, string[] grantOptions )
        {
            string installPromptUrl =
                string.Format("https://{0}/admin/oauth/authorize?client_id={1}&scope={2}&redirect_uri={3}&state={4}&grant_options[]={5}", shopWebsite, _configuration["Shopify:ApiKey"], scopes.ToDelimitedString(), string.Concat(_configuration["Shopify:URL"], callbackApiRoute), nonce, grantOptions.ToDelimitedString());
            _logger.Debug(ConstUtility.ShopifyServiceProject, ConstUtility.ActorShopify, Component, ConstUtility.GetOperation, "Getting redirect url for nonce {shopNonce}", nonce);
            return installPromptUrl;
        }
        public string GetShopNonce ( string shopWebsite ) => _shopifyService.GetShop(shopWebsite).Nonce;
        public string GetShopAccessToken ( string shopWebsite )
        {
            _logger.Debug(ConstUtility.ShopifyServiceProject, ConstUtility.ActorShopify, "ShopifyAppAuth", ConstUtility.GetOperation, "Getting access token for the {shopWebsite}", shopWebsite);
            return _db.ShopifyBusiness
                .Include(shp => shp.ShopifyApiAccess)
                .First(shp => shp.Website.Equals(shopWebsite.ToLower()))
                .ShopifyApiAccess
                .AccessToken;
        }

        public Task RegisterShop ( string shopWebsite )
        {
            ShopifyBusiness business = _shopifyService.GetShop(shopWebsite);
            _logger.Debug(ConstUtility.ShopifyServiceProject, ConstUtility.ActorShopify, Component, ConstUtility.UpdateOperation, "Registering existing shop {shopName}", business.Name);
            _db.Update(business);
            business.IsRegistered = true;
            return _db.SaveChangesAsync();
        }
        public Task UnegisterShop ( string shopWebsite )
        {
            ShopifyBusiness business = _shopifyService.GetShop(shopWebsite);
            _logger.Debug(ConstUtility.ShopifyServiceProject, ConstUtility.ActorShopify, Component, ConstUtility.UpdateOperation, "Unreigstering existing shop {shopName}", business.Name);
            _db.Update(business);
            business.IsRegistered = false;
            return _db.SaveChangesAsync();
        }
        public async Task StoreShopAccessToken ( string shopWebsite, string authorizationCode )
        {
            var shopifyAccessModel = _shopifyApi.GetApiAccess(shopWebsite, authorizationCode);
            ShopifyApiAccess apiAccess = new()
            {
                AccessSopeArray = shopifyAccessModel.AccessScopeArray,
                AccessToken = shopifyAccessModel.AccessToken,
                ApiResponse = shopifyAccessModel.ApiResponse,
                ExpiryInSeconds = shopifyAccessModel.ExpiryInSec
            };
            _db.ShopifyApiAccess.Add(apiAccess);
            ShopifyBusiness business = _shopifyService.GetShop(shopWebsite);
            
            _db.ShopifyBusiness.Update(business);
            business.ShopifyApiAccess = apiAccess;

            await _db.SaveChangesAsync();
        }
        public Task StoreShopNonce ( string shopWebsite, string nonce )
        {
            bool shopExists = _shopifyService.ShopExists(shopWebsite);

            if (shopExists)
            {
                ShopifyBusiness business = _shopifyService.GetShop(shopWebsite);
                _db.ShopifyBusiness.Update(business);
                business.Nonce = nonce;
                business.IsRegistered = false;
            }
            else
            {
                ShopifyBusiness business = new ShopifyBusiness()
                {
                    IsRegistered = false,
                    Name = _shopifyService.GetShopName(shopWebsite),
                    Nonce = nonce,
                    Website = shopWebsite
                };
                _db.ShopifyBusiness.Add(business);
            }

            return _db.SaveChangesAsync();
        }
    }
}
