using System.Text.Json.Serialization;

using Utilities.Extensions;

namespace ECommerceSPAWarningWidget.ShopifyServices.Models
{
    public class ShopifyAccessModel
    {
        [JsonPropertyName("api_response")]
        public string ApiResponse { get; set; }

        [JsonPropertyName("access_token")]
        public string AccessToken { get; set; }


        [JsonPropertyName("scope")]
        public string AccessScopes { get; set; }

        [JsonIgnore]
        public string[] AccessScopeArray
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

        [JsonPropertyName("expires_in")]
        public long ExpiryInSec { get; set; }

        [JsonPropertyName("associated_user_scope")]
        public string[] UserScope { get; set; }
        [JsonPropertyName("associated_user")]
        public AssociatedUserModel AssociatedUser { get; set; }

        public class AssociatedUserModel
        {
            [JsonPropertyName("id")]
            public long Id { get; set; }
            [JsonPropertyName("first_name")]
            public string FirstName { get; set; }
            [JsonPropertyName("last_name")]
            public string LastName { get; set; }
            [JsonPropertyName("email")]
            public string Email { get; set; }
            [JsonPropertyName("email_verified")]
            public bool IsVerifiedEmail { get; set; }
            [JsonPropertyName("account_owner")]
            public bool IsAccntOwner { get; set; }
            [JsonPropertyName("locale")]
            public string Locale { get; set; }
            [JsonPropertyName("collaborator")]
            public bool IsCollaborator { get; set; }
        }
    }
}
