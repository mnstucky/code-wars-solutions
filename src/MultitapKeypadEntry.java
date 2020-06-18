// https://www.codewars.com/kata/54a2e93b22d236498400134b/train/java

public class MultitapKeypadEntry {
    public static int presses(String phrase) {
        String[] keypad = { "1", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "PQRS7", "TUV8", "WXYZ9", "*", " 0", "#" };
        int sum = 0;
        char currentChar = ' ';
        for (int i = 0; i < phrase.length(); i++) {
            currentChar = Character.toUpperCase(phrase.charAt(i));
            for (int j = 0; j < keypad.length; j++) {
                int index = keypad[j].indexOf(currentChar);
                if (index != -1) {
                    sum += index + 1;
                    break;
                }
            }
        }
        return sum;
    }
    // code for testing
    public static void main(String[] args){
        System.out.println(MultitapKeypadEntry.presses("LOL"));
        System.out.println(MultitapKeypadEntry.presses("HOW R U"));
    }
}
