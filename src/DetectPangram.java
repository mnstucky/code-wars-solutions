// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/java

import java.util.*;

public class DetectPangram {
	public static boolean check(String sentence) {
		Map<Character, Integer> map = new HashMap<>();
		sentence.chars().forEach(ltr -> map.put(Character.toUpperCase((char)ltr), 1));
		for (char c = 'A'; c <= 'Z'; ++c) {
			if (map.get(c) == null)
				return false;
		}
		return true;
	}
}
