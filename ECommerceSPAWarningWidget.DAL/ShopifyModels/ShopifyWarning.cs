using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using ECommerceSPAWarningWidget.DAL.CommonModels;

namespace ECommerceSPAWarningWidget.DAL.ShopifyModels
{
    public class ShopifyWarning : WarningPopupInfo
    {
        public ShopifyWarning ()
        {
            Id = Guid.NewGuid().ToString();
        }
        [Key]
        public string Id { get; set; }

        public string ShopId { get; set; }
        [ForeignKey("ShopId")]
        public virtual ShopifyBusiness ShopifyBusiness{ get; set; }
    }
}
