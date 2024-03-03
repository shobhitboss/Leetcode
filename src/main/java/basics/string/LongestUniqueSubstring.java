package basics.string;

import java.util.HashMap;
import java.util.Map;

public class LongestUniqueSubstring {

	public static void main(String[] args) {
		System.out.println(getUniqueCharacterSubstring("Shobhit"));
	}

	public static String getUniqueCharacterSubstring(String input) {
		Map<Character, Integer> visited = new HashMap<>();
		String output = "";
		for (int start = 0, end = 0; end < input.length(); end++) {
			char currChar = input.charAt(end);
			if (visited.containsKey(currChar)) {
				start = Math.max(visited.get(currChar) + 1, start);
			}
			if (output.length() < end - start + 1) {
				output = input.substring(start, end + 1);
			}
			visited.put(currChar, end);
			System.out.println(visited.toString() + " String : " + output + " Start : " + start + " End : " + end);
		}
		return output;
	}

}
