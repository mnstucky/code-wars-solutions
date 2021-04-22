// https://www.codewars.com/kata/563f037412e5ada593000114/train/csharp

namespace CodeWars
{
    class Program
    {
        public static int CalculateYears(double principal, double interest, double tax, double desiredPrincipal)
        {
            var years = 0;
            while (principal < desiredPrincipal)
            {
                var lastYearsPrincipal = principal;
                principal *= (1 + interest);
                principal -= (principal - lastYearsPrincipal) * tax;
                years += 1;
            }
            return years;
        }
    }
}
