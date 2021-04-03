using System.Threading.Tasks;

using ECommerceSPAWarningWidget.ShopifyServices.Models;

namespace ECommerceSPAWarningWidget.ShopifyServices.Interfaces
{
    public interface IShopifyApiService
    {
        ShopifyAccessModel GetApiAccess ( string shopWebsite, string authorizationCode );
    }
}
