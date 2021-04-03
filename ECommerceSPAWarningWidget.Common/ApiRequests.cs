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

        public Task<string> GET ( string baseAddress, string url, Dictionary<string, string> queryKeyValuePair, Dictionary<string, string> headers = null )
        {
            _logger.Debug(Project, Actor, Component, "GET_API", "Get http call to {apiBaseAddress}", baseAddress);

            httpClient.DefaultRequestHeaders.Clear();
            if (headers != null)
                foreach (var header in headers)
                    httpClient.DefaultRequestHeaders.Add(header.Key, header.Value);

            httpClient.BaseAddress = new Uri(baseAddress);

            string requestQueryUrl = GetRequestQueryFormattedUrl(url, queryKeyValuePair);

            using var response = httpClient.GetAsync(requestQueryUrl).Result;

            response.EnsureSuccessStatusCode();
            return response.Content.ReadAsStringAsync();
        }

        public Task<string> POST ( string baseAddress, string url, Dictionary<string, string> queryKeyValuePair, object postBody )
        {
            _logger.Debug(Project, Actor, Component, "POST_API", "Send POST http call to {apiBaseAddress}", baseAddress);

            httpClient.DefaultRequestHeaders.Clear();
            httpClient.BaseAddress = new Uri(baseAddress);

            string requestQueryUrl = GetRequestQueryFormattedUrl(url, queryKeyValuePair);
            using var response = httpClient.PostAsJsonAsync(requestQueryUrl, postBody).Result;

            response.EnsureSuccessStatusCode();
            return response.Content.ReadAsStringAsync();
        }


        private string GetRequestQueryFormattedUrl ( string url, Dictionary<string, string> queryKeyValuePair )
        {
            string requestQueryUrl = url;
            if (queryKeyValuePair!=null)
            {
                requestQueryUrl = QueryHelpers.AddQueryString(url, queryKeyValuePair);
            }
            return requestQueryUrl;
        }
    }
}
