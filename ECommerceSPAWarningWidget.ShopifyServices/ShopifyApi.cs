using System.Text.Json;
using System.Threading.Tasks;

using ECommerceSPAWarningWidget.Common.Interfaces;
using ECommerceSPAWarningWidget.ShopifyServices.Interfaces;
using ECommerceSPAWarningWidget.ShopifyServices.Models;

using Microsoft.Extensions.Configuration;

using MultiLogger.Interfaces;
using MultiLogger.Model;

namespace ECommerceSPAWarningWidget.ShopifyServices
{
    public class ShopifyApi : IShopifyApiService
    {
        private readonly IApiRequests _api;
        private readonly IConfiguration _configuration;
        private readonly ILogger<DetailedLogEntry> _logger;

        private const string BaseAddress = "https://{0}";
        private const string Project = "ShopifyServices";
        private const string Actor = "SHOPIFY";
        private const string Component = "ShopifyApi";

        public ShopifyApi ( IApiRequests apiService, IConfiguration configuration, ILogger<DetailedLogEntry> logger )
        {
            _api = apiService;
            _configuration = configuration;
            _logger = logger;
        }
        public ShopifyAccessModel GetApiAccess ( string shop, string authorizationCode )
        {
            _logger.Debug(Project, Actor, Component, "GetAPIAccess", "Getting access tokens from shopify for shop {shopAddress}", shop);
            var postBody = new
            {
                client_id = _configuration["Shopify:ApiKey"],
                client_secret = _configuration["Shopify:SecretApiKey"],
                code = authorizationCode
            };
            
            var responseString = _api.GetPOSTResponse(GetShopifyBaseAddress(shop), "/admin/oauth/access_token", null, postBody).Result;

            ShopifyAccessModel accessModel = JsonSerializer.Deserialize<ShopifyAccessModel>(responseString);
            accessModel.ApiResponse = responseString;
            return accessModel;
        }

        private string GetShopifyBaseAddress(string shop)
        {
            return string.Format(BaseAddress, shop);
        }
    }
}
