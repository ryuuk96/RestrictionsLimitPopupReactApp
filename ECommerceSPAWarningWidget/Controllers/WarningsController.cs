
using ECommerceSPAWarningWidget.DAL.ShopifyModels;
using ECommerceSPAWarningWidget.ShopifyServices.Interfaces;
using ECommerceSPAWarningWidget.Utility.Interfaces;

using Microsoft.AspNetCore.Mvc;

using MultiLogger.Interfaces;
using MultiLogger.Model;

namespace ECommerceSPAWarningWidget.Controllers
{
    [Route("api/[controller]")]
    public class WarningsController : Controller
    {
        private readonly ILogger<DetailedLogEntry> _logger;
        private readonly IShopifyShopWarning _shopWarning;
        private readonly IShopifyAPIHelper _shopifyHelper;

        public WarningsController ( ILogger<DetailedLogEntry> logger,
            IShopifyAPIHelper shopifyAPIHelper,
            IShopifyShopWarning shopWarning )
        {
            _logger = logger;
            _shopifyHelper = shopifyAPIHelper;
            _shopWarning = shopWarning;
        }

        [HttpGet("[action]")]
        public IActionResult Warnings ( [FromHeader] string referer, [FromHeader] string cookie )
        {
            string shopWebsite = _shopifyHelper.ShopWebsiteFromHeader(cookie, referer);
            if (string.IsNullOrWhiteSpace(shopWebsite))
                return BadRequest("Shop origin not passed as part of the request");
            return Ok(_shopWarning.GetShopWarnings(shopWebsite));
        }

        [HttpGet("[action]/{warning}")]
        public IActionResult WarningDetail([FromHeader]string cookie, [FromHeader]string referer, [FromQuery]string warning)
        {
            string shopWebsite = _shopifyHelper.ShopWebsiteFromHeader(cookie, referer);
            if (string.IsNullOrWhiteSpace(shopWebsite))
                return BadRequest("Shop origin not passed as part of the request");
            return Ok(_shopWarning.GetWarningDetails(shopWebsite, warning));
        }

        [HttpPut("[action]")]
        public IActionResult Update([FromHeader]string cookie, [FromHeader]string referer,[FromBody]ShopifyWarning warning)
        {
            string shopWebsite = _shopifyHelper.ShopWebsiteFromHeader(cookie, referer);
            if (string.IsNullOrWhiteSpace(shopWebsite))
                return BadRequest("Shop origin not passed as part of the request");
            return Ok(_shopWarning.UpdateWarning(shopWebsite, warning));
        }

        [HttpDelete("{warning}")]
        public IActionResult Delete([FromHeader]string cookie, [FromHeader]string referer, string warning)
        {
            string shopWebsite = _shopifyHelper.ShopWebsiteFromHeader(cookie, referer);
            if (string.IsNullOrWhiteSpace(shopWebsite))
                return BadRequest("Shop origin not passed as part of the request");
            return Ok(_shopWarning.DeleteWarning(shopWebsite, warning));
        }

        [HttpPost("[action]")]
        public IActionResult AddWarning([FromBody]ShopifyWarning warning, [FromHeader] string cookie, [FromHeader]string referer)
        {
            string shopWebsite = _shopifyHelper.ShopWebsiteFromHeader(cookie, referer);
            if (string.IsNullOrWhiteSpace(shopWebsite))
                return BadRequest("Shop origin not passed as part of the request");
            return Ok(_shopWarning.AddWarning(shopWebsite, warning));
        }
    }
}
