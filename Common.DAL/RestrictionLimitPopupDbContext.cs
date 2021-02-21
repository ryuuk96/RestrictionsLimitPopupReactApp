using Microsoft.EntityFrameworkCore;

namespace RestrictionsLimitPopup.DAL
{
    public class RestrictionLimitPopupDbContext: DbContext
    {
        public RestrictionLimitPopupDbContext (DbContextOptions<RestrictionLimitPopupDbContext> options): base(options) { }


    }
}
