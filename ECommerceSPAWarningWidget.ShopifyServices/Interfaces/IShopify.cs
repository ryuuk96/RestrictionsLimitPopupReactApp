using ECommerceSPAWarningWidget.DAL.ShopifyModels;

namespace ECommerceSPAWarningWidget.ShopifyServices.Interfaces
{
    public interface IShopify
    {
        ShopifyBusiness GetShop ( string shopWebsite );
        bool ShopExists ( string shopWebsite );
        bool RegisteredShopExists ( string shopWebsite );

        string GetShopName ( string shopWebsite );
    }
}
