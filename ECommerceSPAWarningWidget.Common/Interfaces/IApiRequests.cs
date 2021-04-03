using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace ECommerceSPAWarningWidget.Common.Interfaces
{
    public interface IApiRequests
    {
        Task<string> POST ( string baseAddress, string url, Dictionary<string, string> queryKeyValuePair, object postBody );
        Task<string> GET ( string baseAddress, string url, Dictionary<string, string> queryKeyValuePair, Dictionary<string, string> headers = null );

    }
}
