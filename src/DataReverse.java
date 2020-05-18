import java.util.ArrayList;
import java.util.Arrays;

// https://www.codewars.com/kata/569d488d61b812a0f7000015/java
	
public class DataReverse {

	public static int[] DataReverse(int[] data) {
	    Integer[] array = new Integer[data.length];
	    for (int i = 0; i < data.length; i++) {
	      array[i] = new Integer(data[i]);
	    }
	    ArrayList<Integer> source = new ArrayList<>(Arrays.asList(array));
	    ArrayList<Integer> destination = new ArrayList<>();
	    for (int i = data.length; i > 0; i -= 8) {
	      destination.addAll(source.subList(i - 8, i));
	    }
	    int[] result = new int[destination.size()];
	    for (int i = 0; i < result.length; i++) {
	      result[i] = destination.get(i);
	    }
	    return result;
	}
}
