using System;

using Logger.Models;

namespace Logger
{
    public class LoggerEvent
    {
        public event EventHandler<CustomLogEntry> RaiseLogEvent;

        public event EventHandler RaiseStopLogEvent;
        public event EventHandler RaiseStartLogEvent;

        public void WriteLog(CustomLogEntry logEntry)
        {
            OnRaiseLogEvent(logEntry);
        }
        public void StartLog()
        {
            OnRaiseStartLogEvent(new EventArgs());
        }
        public void StopLog()
        {
            OnRaiseStopLogEvent(new EventArgs());
        }

        protected virtual void OnRaiseLogEvent ( CustomLogEntry logEntry )
        {
            // Make a temporary copy of the event to avoid possibility of
            // a race condition if the last subscriber unsubscribes
            // immediately after the null check and before the event is raised.
            EventHandler<CustomLogEntry> raiseEvent = RaiseLogEvent;

            // Event will be null if there are no subscribers
            if (raiseEvent != null)
                raiseEvent(this, logEntry);
        }
        protected virtual void OnRaiseStartLogEvent (EventArgs e)
        {
            // Make a temporary copy of the event to avoid possibility of
            // a race condition if the last subscriber unsubscribes
            // immediately after the null check and before the event is raised.
            EventHandler raiseEvent = RaiseStartLogEvent;

            // Event will be null if there are no subscribers
            if (raiseEvent != null)
                raiseEvent(this, e);
        }
        protected virtual void OnRaiseStopLogEvent (EventArgs e)
        {
            // Make a temporary copy of the event to avoid possibility of
            // a race condition if the last subscriber unsubscribes
            // immediately after the null check and before the event is raised.
            EventHandler raiseEvent = RaiseStopLogEvent;

            // Event will be null if there are no subscribers
            if (raiseEvent != null)
                raiseEvent(this, e);
        }
    }
}
