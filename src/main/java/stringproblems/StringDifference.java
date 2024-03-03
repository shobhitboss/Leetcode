package stringproblems;

import java.util.Arrays;

public class StringDifference {

	public static char findTheDifference(String s, String t) {
		int[] arr = new int[26];
		char c = 0;
		for (char ch : t.toCharArray())
			arr[ch - 97]++;
		System.out.println(Arrays.toString(arr));
		for (char ch : s.toCharArray())
			arr[ch - 97]--;
		System.out.println(Arrays.toString(arr));
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] == 1)
				c = (char) (i + 97);
		}
		return c;
	}

	public static void main(String[] args) {
		String s = "a", t = "aa";
		System.out.println(findTheDifference(s, t));
	}

}
