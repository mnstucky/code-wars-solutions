// https://www.codewars.com/kata/5b7bd90ef643c4df7400015d/train/csharp

namespace DefaultNamespace
{
    public class CreatePalindrome
    {
        public static bool solve(String st){
            for (int i = 0; i < st.Length; i += 1)
            {
                Console.WriteLine(st);
                var a = st[i];
                var b = st[st.Length - i - 1];
                if (a + 1 == b + 1 || 
                    a + 1 == b - 1 ||
                    a - 1 == b + 1 || 
                    a - 1 == b - 1)
                {
                    continue;
                }
                return false;
            }
            return true;
        }
    }
}