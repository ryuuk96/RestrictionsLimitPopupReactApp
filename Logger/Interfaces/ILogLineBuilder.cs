namespace Logger.Interfaces
{
    public interface ILogLineBuilder<T>
    {
        string BuildLogLine<T> ( T logEntryModel );
    }
}
