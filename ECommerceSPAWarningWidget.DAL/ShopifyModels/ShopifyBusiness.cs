using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using ECommerceSPAWarningWidget.DAL.CommonModels;

namespace ECommerceSPAWarningWidget.DAL.ShopifyModels
{
    public class ShopifyBusiness : Business
    {
        [Key]
        public string Id { get; set; }
        public ShopifyBusiness ()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Nonce { get; set; }

        public string ShopifyApiAccessId { get; set; }
        [ForeignKey("ShopifyApiAccessId")]
        public virtual ShopifyApiAccess ShopifyApiAccess { get; set; }
    }
}
