using System;

namespace ECommerceSPAWarningWidget.DAL.CommonModels
{
    public class Subscription
    {
        public string Name { get; set; }
        public string DescriptionHTML { get; set; }
        public decimal PricePerMonth { get; set; }
        public bool IsActive { get; set; }
        public DateTime LastUpdated { get; set; }
    }
}
