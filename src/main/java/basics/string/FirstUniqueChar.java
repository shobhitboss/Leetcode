package basics.string;

import java.util.HashMap;

public class FirstUniqueChar {

	public static int firstUniqueChar(String str) {
		HashMap<Character, Integer> map = new HashMap<>();
		for (int i = 0; i < str.length() - 1; i++) {
			char ch = str.charAt(i);
			if (map.containsKey(ch))
				map.put(ch, -1);
			else
				map.put(ch, i);
		}
		System.out.println(map.toString());
		int min = Integer.MAX_VALUE;
		for (char ch : map.keySet()) {
			if (map.get(ch) > -1 && map.get(ch) < min) {
				min = map.get(ch);
			}
		}
		return min == Integer.MAX_VALUE ? -1 : min;
	}

	public static void main(String[] args) {
		System.out.println(firstUniqueChar("SShobhit"));
	}

}
