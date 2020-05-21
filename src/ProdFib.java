// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

public class ProdFib {
	public static long[] productFib(long prod) {
	    long num0 = 0, num1 = 1, num2 = 1;
	    if (prod == 0) return new long[]{0, 1, 1};
	    if (prod == 1) return new long[]{1, 1, 1};
	    while (true) {
	      num0 = num1;
	      num1 = num2;
	      num2 = num0 + num1;
	      if (num0 * num1 == prod) return new long[]{num0, num1, 1};
	      if (num1 * num2 == prod) return new long[]{num1, num2, 1};
	      if (num1 * num2 > prod) return new long[]{num1, num2, 0};
	    }
	  }
}
