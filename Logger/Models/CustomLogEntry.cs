using System;
using System.Collections.Generic;

namespace Logger.Models
{
    public class CustomLogEntry : EventArgs
    {
        public CustomLogEntry ()
        {
            Timestamp = DateTime.UtcNow;
        }
        public ProjectType Project { get; set; }
        public UserType Actor { get; set; }
        public LogLevel LogType { get; set; }
        public DateTime Timestamp { get; private set; }
        public string Component { get; set; }
        public OperationType Operation { get; set; }
        public string Message { get; set; }
        public Dictionary<string, string> StringProperties { get; set; } = null;


        public enum LogLevel
        {
            Trace,
            Info,
            Debug,
            Warning,
            Error
        }
        public enum ProjectType
        {
            Shopify,
            BigCommerce,
            WebSite,
            Common,
            Microsoft
        }
        public enum UserType
        {
            Application,
            Developer,
            Admin,
            Customer
        }
        public enum OperationType
        {
            CREATE,
            READ,
            UPDATE,
            DELETE,
            ERROR,
            EXCEP,
            CONN,
            DISCONN,
        }
    }
}