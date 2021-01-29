namespace Logger.Models
{
    public class BuiltInLoggerOptions
    {
        public const string PropertyName = "StandardLogger";

        public ConfiguredLogLevel LogLevel { get; set; }

        public string[] LoggerType { get; set; }


        public class ConfiguredLogLevel 
        {
            public CustomLogEntry.LogLevel Default { get; set; }
        }

    }
}
