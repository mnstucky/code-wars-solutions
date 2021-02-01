// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/csharp

namespace DefaultNamespace
{
    public class DoIGetABonus
    {
        public static string bonus_time(int salary, bool bonus)
        {
            if (bonus) 
            {
                salary *= 10;
            }
            return $"${salary}";
        }
    }
}