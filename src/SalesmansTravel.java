import java.util.Arrays;

// https://www.codewars.com/kata/56af1a20509ce5b9b000001e/train/java

public class SalesmansTravel {
    public static String travel(String r, String zipcode) {
        if (!zipcode.matches("\\w\\w\\h\\d{5}"))
        	return zipcode + ":/";
    	String[] list = r.split(",");
        String[] filteredList = Arrays.stream(list).filter(e -> e.contains(zipcode)).toArray(String[]::new);
        if (filteredList.length == 0)
        	return zipcode + ":/";
        StringBuilder result = new StringBuilder(zipcode + ":");
        StringBuilder combinedHouseNumbers = new StringBuilder();
        for (int i = 0; i < filteredList.length; i++) {
        	StringBuilder builder = new StringBuilder(filteredList[i]);
        	builder.delete(builder.length() - 9, builder.length());
        	int firstSpace = builder.indexOf(" ");
        	combinedHouseNumbers.append(builder.substring(0, firstSpace));
        	combinedHouseNumbers.append(",");
        	builder.delete(0, firstSpace + 1);
        	result.append(builder);
        	result.append(",");
        }
        result.deleteCharAt(result.length() - 1);
        result.append("/");
        combinedHouseNumbers.deleteCharAt(combinedHouseNumbers.length() - 1);
        result.append(combinedHouseNumbers);
        return result.toString();
    }
}
