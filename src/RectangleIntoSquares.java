import java.util.*;

// https://www.codewars.com/kata/rectangle-into-squares

public class RectangleIntoSquares {

    public static void main(String[] args) {
        System.out.println(sqInRect(907, 1002));
    }

    public static List<Integer> sqInRect(int lng, int wdth) {
        if (lng == wdth)
            return null;
        ArrayList<Integer> result = new ArrayList<>();
        while (lng * wdth > 0) {
            if (lng > wdth) {
                lng -= wdth;
                result.add(wdth);
            }
            else {
                wdth -= lng;
                result.add(lng);
            }
        }
        return result;
    }

}
