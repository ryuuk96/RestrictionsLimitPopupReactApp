using System;

namespace ECommerceSPAWarningWidget.DAL.CommonModels
{
    public class Business
    {
        public Business ()
        {
            RegisteredOn = DateTime.UtcNow;
        }
        public string Name { get; set; }
        public string Website { get; set; }
        public  DateTime? RegisteredOn { get; set; }
        public bool IsRegistered { get; set; }
        public DateTime? UninstalledOn { get; set; }
    }
}
