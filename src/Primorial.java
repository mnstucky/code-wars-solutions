import java.math.BigInteger;

// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124/train/java

public class Primorial {
    public static String numPrimorial(int n) {
        int count = 0;
        BigInteger result = new BigInteger("1");
        BigInteger possiblePrime = new BigInteger("2");
        while (count < n) {
          if (isPrimeNumber(possiblePrime)) {
            count++;
            result = result.multiply(possiblePrime);
          }
          possiblePrime = possiblePrime.add(BigInteger.ONE);
        }
        return result.toString();
    }
    
    public static boolean isPrimeNumber(BigInteger n) {
      for (BigInteger i = new BigInteger("2"); i.compareTo(n) < 0; i = i.add(BigInteger.ONE)) {
        if (n.remainder(i).compareTo(BigInteger.ZERO) == 0)
          return false;
      }
      return true;
    }  
}

