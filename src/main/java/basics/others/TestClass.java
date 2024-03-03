package basics.others;

import java.util.HashMap;
import java.util.Map;

public class TestClass {

	public static boolean isPalindromePossible(String str) {
		Map<Character, Integer> mapp = new HashMap<>();
		int count = 0;
		for (char ch : str.toCharArray())
			mapp.put(ch, mapp.getOrDefault(ch, 0) + 1);
		for (int i : mapp.values()) {
			if (i % 2 != 0)
				count++;
		}
		return count < 2 ? true : false;
	}

	public static void main(String[] args) {
		System.out.println(isPalindromePossible("ShobhsitihbohS"));
	}
}
