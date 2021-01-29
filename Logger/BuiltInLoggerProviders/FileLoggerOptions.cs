using Logger.Interfaces;

using Microsoft.Extensions.Logging;

namespace Logger.BuiltInLoggerProviders
{
    public class FileLoggerOptions
    {
        public int MaxFileSizeInMB { get; set; } = 20;
        public string OutputFolder { get; set; } = @".\logs";
        public int MaxFilesRetainPolicy { get; set; } = 100;
    }
}
