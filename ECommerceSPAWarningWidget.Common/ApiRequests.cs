using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;

using ECommerceSPAWarningWidget.Common.Interfaces;

using Microsoft.AspNetCore.WebUtilities;

using MultiLogger.Interfaces;
using MultiLogger.Model;

namespace ECommerceSPAWarningWidget.Common
{
    public class ApiRequests : IApiRequests
    {
        private const string Project = "COMMON";
        private const string Actor = "APPLICATION";
        private const string Component = "ApiRequests";

        // Only create one Instance of http client
        private readonly HttpClient httpClient;
        private readonly ILogger<DetailedLogEntry> _logger;

        public ApiRequests ( IHttpClientFactory httpClientFactory, ILogger<DetailedLogEntry> logger )
        {
            httpClient = httpClientFactory.CreateClient();
            _logger = logger;
        }
        public Task<HttpResponseMessage> GetPOSTResponse ( string baseAddress, string url, Dictionary<string, string> queryKeyValuePair, object postBody )
        {
            _logger.Debug(Project, Actor, Component, "POST_API", "Send POST http call to {apiBaseAddress}", baseAddress);
            httpClient.BaseAddress = new Uri(baseAddress);


            if (queryKeyValuePair!=null)
            {
                string requestQueryUrl = QueryHelpers.AddQueryString(url, queryKeyValuePair);

                return httpClient.PostAsJsonAsync(requestQueryUrl, postBody);
            }
            return httpClient.PostAsJsonAsync(url, postBody);
        }
    }
}
