using System.Collections.Generic;

namespace Logger.Models
{
    public class MSLogScopeInfo
    {
        public string Text { get; set; }
        public Dictionary<string, object> Properties { get; set; }
    }
}
