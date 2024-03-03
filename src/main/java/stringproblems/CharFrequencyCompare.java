package stringproblems;

import java.util.Arrays;

public class CharFrequencyCompare {

	public static int[] numSmallerByFrequency(String[] queries, String[] words) {
		int[] word = new int[words.length];
		int[] query = new int[queries.length];
		int[] res = new int[queries.length];
		for (int i = 0; i < words.length; i++)
			word[i] = getMinCharFrequency(words[i]);
		Arrays.sort(word);
		for (int i = 0; i < queries.length; i++)
			query[i] = getMinCharFrequency(queries[i]);
		for (int i = 0; i < query.length; i++) {
			int temp = 0, j = word.length - 1;
			while (j >= 0 && query[i] < word[j]) {
				j--;
				temp++;
			}
			res[i] = temp;
		}
		return res;
	}

	private static int getMinCharFrequency(String str) {
		int[] arr = new int[26];
		for (char ch : str.toCharArray())
			arr[ch - 'a']++;
		for (int i = 0; i < 26; i++) {
			if (arr[i] != 0)
				return arr[i];
		}
		return -1;
	}

	public static void main(String[] args) {
		String[] queries = { "bbb", "cc" }, words = { "a", "aa", "aaa", "aaaa" };
		numSmallerByFrequency(queries, words);
	}

}
