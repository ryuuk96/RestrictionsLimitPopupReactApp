using System;
using System.ComponentModel.DataAnnotations.Schema;

using Utilities.Extensions;

namespace ECommerceSPAWarningWidget.DAL.CommonModels
{
    public class WarningPopupInfo
    {
        public string Name { get; set; }
        public DateTime CreatedOn { get; set; }

        private string category;
        public string Category
        {
            get => CategoryEnum.ToString();
            set
            {
                category = value;
                CategoryEnum = category.ToEnum(WarningCategory.INVALID);
            }
        }

        private string status;
        public string Status
        {
            get => StatusEnum.ToString();
            set
            {
                status = value;
                StatusEnum = status.ToEnum(WarningStatus.INACTIVE);
            }
        }
        public string CategoryInfo{ get; set; }


        [NotMapped]
        public WarningCategory CategoryEnum { get; set; }
        [NotMapped]
        public WarningStatus StatusEnum { get; set; }

        public enum WarningCategory
        {
            INVALID,
            AGE_WARNING,
            OUT_OF_STOCK,
            PRODUCT_ELEMENTS,
            UNIT_BOUGHT_RESTRICTION
        }
        public enum WarningStatus
        {
            ACTIVE,
            INACTIVE,
            PAUSED
        }
    }
}
