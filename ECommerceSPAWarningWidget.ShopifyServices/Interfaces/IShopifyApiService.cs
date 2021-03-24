﻿using System.Threading.Tasks;

using ECommerceSPAWarningWidget.ShopifyServices.Models;

namespace ECommerceSPAWarningWidget.ShopifyServices.Interfaces
{
    public interface IShopifyApiService
    {
        Task<ShopifyAccessModel> GetApiAccess ( string shop, string authorizationCode );
    }
}