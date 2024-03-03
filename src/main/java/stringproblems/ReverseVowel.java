package stringproblems;

import java.util.Arrays;
import java.util.HashSet;

public class ReverseVowel {

	public static String reverseVowels(String s) {
		if (s == null || s.length() <= 1)
			return s;
		char[] arr = s.toCharArray();
		HashSet<Character> set = new HashSet<>();
		set.addAll(Arrays.asList('A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'));
		int i = 0, j = arr.length - 1;
		while (i < j) {
			while (!set.contains(arr[j]) && i < j)
				j--;
			while (!set.contains(arr[i]) && i < j)
				i++;
			char temp = arr[i];
			arr[i++] = arr[j];
			arr[j--] = temp;
		}
		return String.valueOf(arr);

	}

	public static void main(String[] args) {
		System.out.println(reverseVowels("leetcode"));
	}

}
