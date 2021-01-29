using System;

using Logger.Interfaces;
using Logger.Models;

using RestrictionsLimitPopup.Common.Extensions;

namespace Logger
{
    public class CustomLogger : ICustomLogger
    {
        public void Debug ( CustomLogEntry.ProjectType projType, CustomLogEntry.UserType actor, string component, CustomLogEntry.OperationType operation, string message, params object[] placeholderValue )
        {
            Log(projType, actor, CustomLogEntry.LogLevel.Debug, component, operation, message, placeholderValue);
        }

        public void Info ( CustomLogEntry.ProjectType projType, CustomLogEntry.UserType actor, string component, CustomLogEntry.OperationType operation, string message, params object[] placeholderValue )
        {
            Log(projType, actor, CustomLogEntry.LogLevel.Info, component, operation, message, placeholderValue);
        }
        
        public void Warning ( CustomLogEntry.ProjectType projType, CustomLogEntry.UserType actor, string component, CustomLogEntry.OperationType operation, string message, params object[] placeholderValue )
        {
            Log(projType, actor, CustomLogEntry.LogLevel.Warning, component, operation, message, placeholderValue);
        }

        public void Error ( CustomLogEntry.ProjectType projType, CustomLogEntry.UserType actor, string component, CustomLogEntry.OperationType operation, string message, params object[] placeholderValue )
        {
            Log(projType, actor, CustomLogEntry.LogLevel.Error, component, operation, message, placeholderValue);
        }

        public void Log ( CustomLogEntry.ProjectType projType, CustomLogEntry.UserType actor, CustomLogEntry.LogLevel logType, string component, CustomLogEntry.OperationType operation, string message, params object[] placeholderValue )
        {
            var messageFormatted = message.FormatPlaceholder(placeholderValue);
            Log(new()
            {
                Actor = actor, 
                Component = component,
                LogType = logType,
                Message = messageFormatted.Item1,
                Operation = operation,
                Project = projType,
                StringProperties = messageFormatted.Item2
            });
        }

        public void Log ( CustomLogEntry logEntry )
        {
            new LoggerEvent().WriteLog(logEntry);
        }

        public void MSLog ( string component, CustomLogEntry.OperationType operation, string message )
        {
            Log(CustomLogEntry.ProjectType.Microsoft, CustomLogEntry.UserType.Application, CustomLogEntry.LogLevel.Debug, component, operation, message);
        }

    }
}
