using System;
using System.ComponentModel.DataAnnotations;

using ECommerceSPAWarningWidget.DAL.CommonModels;

namespace ECommerceSPAWarningWidget.DAL.ShopifyModels
{
    public class ShopifySubscription : Subscription
    {
        [Key]
        public string Id { get; set; }
        public ShopifySubscription ()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}
