
public class EncryptThis {
    public static String encryptThis(String text) {
        StringBuilder result = new StringBuilder(text);
        int spaceIndex = 0, i = 0;
        char temp;
        boolean done = false;
        while (!done) {
        	if (result.length() == 0) break;
        	spaceIndex = result.indexOf(" ", i);
        	if (spaceIndex == -1) {
        		spaceIndex = result.length();
        		done = true;
        	}
        	if (spaceIndex - i > 2) {
        		temp = result.charAt(spaceIndex - 1);
        		result.setCharAt(spaceIndex - 1, result.charAt(i + 1));
        		result.setCharAt(i + 1, temp);
        	}
        	result.replace(i, i + 1, "" + (int)result.charAt(i));
        	spaceIndex = result.indexOf(" ", i);
        	i = spaceIndex + 1;
        }
        return result.toString();    
    }
}
