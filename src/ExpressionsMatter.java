// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

public class ExpressionsMatter {

    public static void main(String[] args) {
        System.out.println(expressionsMatter(2, 1, 2));
        System.out.println(expressionsMatter(1, 1, 1));
        System.out.println(expressionsMatter(2, 1, 1));
        System.out.println(expressionsMatter(1, 2, 3));
        System.out.println(expressionsMatter(1, 3, 1));
        System.out.println(expressionsMatter(2, 2, 2));
        System.out.println(expressionsMatter(5, 1, 3));
        System.out.println(expressionsMatter(3, 5, 7));
        System.out.println(expressionsMatter(5, 6, 1));
        System.out.println(expressionsMatter(1, 6, 1));
        System.out.println(expressionsMatter(2, 6, 1));
        System.out.println(expressionsMatter(6, 7, 1));
        System.out.println(expressionsMatter( 2, 10,  3));
        System.out.println(expressionsMatter( 1,  8,  3));
        System.out.println(expressionsMatter( 9,  7,  2));
        System.out.println(expressionsMatter( 1,  1, 10));
        System.out.println(expressionsMatter( 9,  1,  1));
        System.out.println(expressionsMatter(10,  5,  6));
        System.out.println(expressionsMatter( 1, 10,  1));
    }

    public static int expressionsMatter(int a, int b, int c) {
        int result1 = (a + b > a * b) ? Math.max((a + b) * c, a + b + c) : Math.max(a * b * c, a * b + c);
        int result2 = (c + b > c * b) ? Math.max((c + b) * a, a + b + c) : Math.max(a * b * c, a + b * c);
        return Math.max(result1, result2);
    }
}
