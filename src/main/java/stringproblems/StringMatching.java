package stringproblems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class StringMatching {

	public static List<String> stringMatching(String[] words) {
		List<String> list = new ArrayList<>();
		if (words == null || words.length <= 1)
			return list;
		Arrays.sort(words, (a, b) -> a.length() - b.length());
		for (int i = 0; i < words.length; i++) {
			for (int j = i + 1; j < words.length; j++) {
				if (words[j].contains(words[i])) {
					list.add(words[i]);
					break;
				}
			}
		}
		return list;
	}

	public static void main(String[] args) {
		String[] words = { "leetcoder", "leetcode", "od", "hamlet", "am" };
		System.out.println(stringMatching(words));
	}

}
