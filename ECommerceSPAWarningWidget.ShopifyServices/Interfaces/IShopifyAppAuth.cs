using System.Threading.Tasks;

namespace ECommerceSPAWarningWidget.ShopifyServices.Interfaces
{
    public interface IShopifyAppAuth
    {
        string GetRedirectUrl ( string shop, string callbackApiRoute, string[] scopes, string nonce );
        string GetRedirectUrl ( string shop, string callbackApiRoute, string[] scopes, string nonce, string[] grantOptions );
        bool ValidateShopInstall ( string shop, string hmac, string authorizationCode, string state, long timestamp );
        string GetShopNonce ( string shop );
        Task StoreShopNonce ( string shop, string nonce );

        Task StoreShopAccessToken ( string shop, string authorizationCode );
    }
}
