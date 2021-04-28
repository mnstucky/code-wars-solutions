using System;
using System.Text;

namespace CodeWars
{
    class Program
    {
        public static string BreakCamelCase(string str)
        {
            var result = new StringBuilder();
            foreach (var character in str)
            {
                if (Char.IsUpper(character))
                {
                    result.Append(" " + character);
                }
                else
                {
                    result.Append(character);
                }
            }
            return result.ToString();
        }
    }
}