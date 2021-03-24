using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace ECommerceSPAWarningWidget.Common.Interfaces
{
    public interface IApiRequests
    {
        Task<HttpResponseMessage> GetPOSTResponse ( string baseAddress, string url, Dictionary<string, string> queryKeyValuePair, object postBody );
    }
}
