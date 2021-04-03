using System.Threading.Tasks;

namespace ECommerceSPAWarningWidget.ShopifyServices.Interfaces
{
    public interface IShopifyAppAuth
    {
        bool ValidateShopInstall ( string shopWebsite, string hmac, string authorizationCode, string state, long timestamp );
        
        string GetRedirectUrl ( string shopWebsite, string callbackApiRoute, string[] scopes, string nonce );
        string GetRedirectUrl ( string shopWebsite, string callbackApiRoute, string[] scopes, string nonce, string[] grantOptions );
        string GetShopNonce ( string shopWebsite );
        string GetShopAccessToken ( string shopWebsite );

        Task StoreShopNonce ( string shopWebsite, string nonce );
        Task StoreShopAccessToken ( string shopWebsite, string authorizationCode );
        Task RegisterShop ( string shopWebsite );
        Task UnegisterShop ( string shopWebsite );
    }
}
