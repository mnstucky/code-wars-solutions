// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/csharp

using System;

namespace CodeWars
{
    class Program
    {
        public static int RoundToNext5(int n)
            {
                while (n % 5 != 0)
                {
                    n++;
                }

                return n;
            }
    }
}
