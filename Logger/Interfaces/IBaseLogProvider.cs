using System;

using Microsoft.Extensions.Logging;

namespace Logger.Interfaces
{
    public interface IBaseLogProvider: IDisposable, ISupportExternalScope, ILoggerProvider
    {
        IExternalScopeProvider ScopeProvider { get; }
        bool IsEnabled ( LogLevel logLevel );
        void WriteLog ( string subsystem, string operation, string eventMessage );
    }
}
