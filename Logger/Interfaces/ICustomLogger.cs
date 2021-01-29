
using Logger.Models;

namespace Logger.Interfaces
{
    public interface ICustomLogger
    {
        void Start ();
        void Stop ();


        void MSLog ( string component, CustomLogEntry.OperationType operation, string message );

        void Debug ( CustomLogEntry.ProjectType projType, CustomLogEntry.UserType actor, string component, CustomLogEntry.OperationType operation, string message, params object[] placeholderValue );

        void Info ( CustomLogEntry.ProjectType projType, CustomLogEntry.UserType actor, string component, CustomLogEntry.OperationType operation, string message, params object[] placeholderValue );

        void Warning ( CustomLogEntry.ProjectType projType, CustomLogEntry.UserType actor, string component, CustomLogEntry.OperationType operation, string message, params object[] placeholderValue );

        void Error ( CustomLogEntry.ProjectType projType, CustomLogEntry.UserType actor, string component, CustomLogEntry.OperationType operation, string message, params object[] placeholderValue );

        void Log ( CustomLogEntry.ProjectType projType, CustomLogEntry.UserType actor, CustomLogEntry.LogLevel logType, string component, CustomLogEntry.OperationType operation, string message, params object[] placeholderValue );

        void Log ( CustomLogEntry logEntry );
    }
}
