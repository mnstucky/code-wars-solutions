using System;
using System.Collections.Generic;

// https://www.codewars.com/kata/539ee3b6757843632d00026b/solutions/csharp

    public static class Kata
    {
        public static int[] Capitals(string word)
        {
            var result = new List<int>();
            for (var i = 0; i < word.Length; i++)
            {
                if (Char.IsUpper(word[i]))
                {
                    result.Add(i);
                }
            }
            return result.ToArray();
        }
    }