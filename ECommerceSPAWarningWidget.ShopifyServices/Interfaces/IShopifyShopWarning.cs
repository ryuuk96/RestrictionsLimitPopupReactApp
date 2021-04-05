using System.Collections.Generic;

using ECommerceSPAWarningWidget.DAL.ShopifyModels;

namespace ECommerceSPAWarningWidget.ShopifyServices.Interfaces
{
    public interface IShopifyShopWarning
    {
        IEnumerable<ShopifyWarning> GetShopWarnings ( string shopWebsite );
        ShopifyWarning GetWarningDetails ( string shopWebsite, string warningId );
        ShopifyWarning AddWarning ( string shopWebsite, ShopifyWarning warningInfo );
        ShopifyWarning UpdateWarning ( string shopWebsite, ShopifyWarning warningPopupInfo );
        bool DeleteWarning ( string shopWebsite, string warningId );
    }
}
