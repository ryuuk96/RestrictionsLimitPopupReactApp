using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using Utilities.Extensions;

namespace ECommerceSPAWarningWidget.DAL.ShopifyModels
{
    public class ShopifyApiAccess
    {
        public ShopifyApiAccess ()
        {
            Id = Guid.NewGuid().ToString();
        }
        [Key]
        public string Id { get; set; }
        public string AccessToken { get; set; }
        public long ExpiryInSeconds { get; set; }
        public string ApiResponse { get; set; }

        [NotMapped]
        public string[] AccessSopeArray
        {
            get
            {
                return AccessScopes.ToStringArray();
            }
            set
            {
                AccessScopes = value.ToDelimitedString();
            }
        }
        public string AccessScopes { get; set; }
    }
}
