import jdk.jshell.spi.ExecutionControl;

import java.util.Arrays;
import java.util.stream.Collectors;

// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/java

public class StripComments {
    public static String stripComments(String text, String[] commentSymbols) {
        String[] stringsSplit = text.split("\n");
        String regex = "\\s+$";
        boolean timeToBreak = false;
        for (int lineIndex = 0; lineIndex < stringsSplit.length; lineIndex++) {
            for (int charIndex = 0; charIndex < stringsSplit[lineIndex].length(); charIndex++) {
                timeToBreak = false;
                for (int commentIndex = 0; commentIndex < commentSymbols.length; commentIndex++) {
                    if (commentSymbols[commentIndex].charAt(0) == stringsSplit[lineIndex].charAt(charIndex)) {
                        stringsSplit[lineIndex] = stringsSplit[lineIndex].substring(0, charIndex);
                        timeToBreak = true;
                        break;
                    }
                }
                if (timeToBreak)
                    break;
            }
            stringsSplit[lineIndex] = stringsSplit[lineIndex].replaceAll(regex, "");
        }
        StringBuilder result = new StringBuilder();
        for (int lineIndex = 0; lineIndex < stringsSplit.length - 1; lineIndex++) {
            result.append(stringsSplit[lineIndex] + "\n");
        }
        result.append(stringsSplit[stringsSplit.length - 1]);
        return result.toString();
    }

    public static void main(String[] args) {
        System.out.print(stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", new String[] {"#", "!"}));
    }
}
