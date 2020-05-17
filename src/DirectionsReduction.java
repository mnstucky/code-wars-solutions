// https://www.codewars.com/kata/550f22f4d758534c1100025a

import java.util.ArrayList;
import java.util.Arrays;

public class DirectionsReduction {
    public static String[] dirReduc(String[] arr) {
        boolean completed = false;
        ArrayList<String> arrList = new ArrayList<>(Arrays.asList(arr));
        while (!completed) {
            completed = true;
            for (int i = 0; i < arrList.size() - 1; i++) {
                if (arrList.get(i).equals("NORTH") && arrList.get(i + 1).equals("SOUTH")
                        || arrList.get(i).equals("SOUTH") && arrList.get(i + 1).equals("NORTH")
                        || arrList.get(i).equals("EAST") && arrList.get(i + 1).equals("WEST")
                        || arrList.get(i).equals("WEST") && arrList.get(i + 1).equals("EAST")) {
                    arrList.remove(i + 1);
                    arrList.remove(i);
                    completed = false;
                }
            }
        }
        String[] result = new String[arrList.size()];
        result = arrList.toArray(result);
        return result;
    }
}