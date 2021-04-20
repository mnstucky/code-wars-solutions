// https://www.codewars.com/kata/5626b561280a42ecc50000d1/solutions/csharp

using System;
using System.Collections.Generic;
using System.Linq;

public class SumDigPower
{
        public static long[] SumDigPow(long a, long b)
        {
            var results = new List<long>();
            for (long number = a; number <= b; number++)
            {
                var digits = new List<long>();
                var currentNumber = number;
                while (currentNumber > 0)
                {
                    digits.Insert(0, currentNumber % 10);
                    currentNumber /= 10;
                }
                var currentExponent = 1;
                var consecutiveSum = digits.Aggregate(0L, (total, next) => total + (long)Math.Pow(next, currentExponent++));
                if (consecutiveSum == number)
                {
                    results.Add(number);
                }
            }
            return results.ToArray();
        }

}