using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace RestrictionsLimitPopup.Common.Extensions
{
    public static class StringExt
    {
        /// <summary>
        /// Will add padding to the right of the string which would comprise of the padding character provided
        /// </summary>
        /// <param name="originalString">string to add padding to</param>
        /// <param name="totalCharacters">The length till which the string must be. If the string provided is less than the value provided padding character is appended to the right</param>
        /// <param name="paddingCharacter">Default padding character is blank space</param>
        /// <returns>Right padded string</returns>
        public static string AddPadding ( this string originalString, int totalCharacters, char paddingCharacter = ' ' )
        {
            if (string.IsNullOrWhiteSpace(originalString))
                return originalString;

            return originalString.PadRight(totalCharacters, paddingCharacter);
        }

        /// <summary>
        /// Provides formatted string along with the KeyValuePair of the placeholder and the value used to substitute it in the original string
        /// </summary>
        /// <param name="originalString">string to format</param>
        /// <param name="placeholderValues">Value that will need to be used to replace the placeholder</param>
        /// <returns></returns>
        public static (string, Dictionary<string, string>) FormatPlaceholder ( this string originalString, params object[] placeholderValues )
        {
            if (string.IsNullOrWhiteSpace(originalString)) return (originalString, null);

            if (placeholderValues == null) return (originalString, null);

            if (placeholderValues.Length == 0) return (originalString, null);

            var tempString = originalString.Replace("{", "{~").Replace("}", "~}");

            var allPlaceholders = tempString.Split('{', '}')
                .Where(val => val.StartsWith('~') && val.EndsWith('~') && val.Length > 2)
                .Select(val => val.Trim().Substring(1, val.Length - 2));

            if (allPlaceholders.Count() != placeholderValues.Length)
                throw new InvalidOperationException("Incorrect string and placeholdervalues sent");
            Dictionary<string, string> placeholderValueStore = new Dictionary<string, string>();
            for (int i = 0; i < allPlaceholders.Count(); i++)
            {
                string placeholder = allPlaceholders.ElementAt(i);

                // checking if placeholder is repeated more than once, if yes then throwing an error
                if (Regex.Matches(originalString, "{" + placeholder + "}").Count > 1)
                    throw new InvalidOperationException($"Placeholder {placeholder} has been repeated more than once in {originalString}, thus program cannot determine which values to replace");

                originalString = originalString.Replace("{" + placeholder + "}", placeholderValues[i].ToString());
                placeholderValueStore.Add(placeholder, placeholderValues[i].ToString());
            }
            return (originalString, placeholderValueStore);
        }


    }
}
