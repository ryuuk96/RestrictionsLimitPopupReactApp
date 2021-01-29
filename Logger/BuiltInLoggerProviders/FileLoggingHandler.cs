using System.Collections.Concurrent;

using Logger.Interfaces;
using Logger.Models;

namespace Logger.BuiltInLoggerProviders
{
    public class FileLoggingHandler : ILogLineBuilder<CustomLogEntry>
    {
        ConcurrentQueue<CustomLogEntry> logEntries;

        public FileLoggingHandler (LoggerEvent loggerEvent)
        {
            logEntries  = new ConcurrentQueue<CustomLogEntry>();
            loggerEvent.RaiseLogEvent += StoreLogs;
        }

        public void StoreLogs(object sender, CustomLogEntry logEntry)
        {

        }
        public string BuildLogLine<T> ( T logEntryModel )
        {
            throw new System.NotImplementedException();
        }
    }
}
