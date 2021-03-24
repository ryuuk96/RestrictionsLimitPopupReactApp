using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ECommerceSPAWarningWidget.DAL.ShopifyModels
{
    public class ShopifyBusinessSubscription
    {
        public ShopifyBusinessSubscription ()
        {
            Id = Guid.NewGuid().ToString();
        }
        [Key]
        public string Id { get; set; }
        public string BusinessId { get; set; }
        public string SubscriptionId { get; set; }
        [ForeignKey("BusinessId")]
        public virtual ShopifyBusiness Business { get; set; }

        [ForeignKey("SubscriptionId")]
        public virtual ShopifySubscription Subscription{ get; set; }
    }
}
