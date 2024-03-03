//1160. Find Words That Can Be Formed by Characters
package stringproblems;

import java.util.Arrays;

public class WordFormedByChars {

	public static int countCharacters(String[] words, String chars) {
		int sum = 0;
		int[] arr = new int[26], temp;
		for (char ch : chars.toCharArray())
			arr[ch - 'a']++;
		char c;
		int i;
		for (String str : words) {
			temp = Arrays.copyOf(arr, arr.length);
			for (i = 0; i < str.length(); i++) {
				c = str.charAt(i);
				if (temp[c - 'a'] <= 0)
					break;
				else
					temp[c - 'a']--;
			}
			if (i == str.length())
				sum += str.length();
		}
		return sum;
	}

	public static void main(String[] args) {
		String[] words = { "hello", "world", "leetcode" };
		String chars = "welldonehoneyr";
		System.out.println(countCharacters(words, chars));
	}

}
