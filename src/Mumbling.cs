// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/csharp

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CodeWars
{
    class Program
    {
        public static string Accum(string s)
        {
            var accumulatedResult = new StringBuilder();
            var numberOfRepeats = 1;
            foreach (char letter in s)
            {
                var repeatedLetter = new String(letter, numberOfRepeats).ToLower();
                accumulatedResult.Append(repeatedLetter.First().ToString().ToUpper() + repeatedLetter.Substring(1));
                if (numberOfRepeats < s.Length)
                {
                    accumulatedResult.Append("-");
                }
                numberOfRepeats += 1;
            }

            return accumulatedResult.ToString();
        }
        static void Main(string[] args)
        {
            Console.WriteLine(Program.Accum("abcd"));
        }
    }
}
