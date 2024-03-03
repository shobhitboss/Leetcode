package basics.array;

import java.util.Arrays;

public class KeyBoardRow {

	static int[] arr = { 2, 3, 3, 2, 1, 2, 2, 2, 1, 2, 2, 2, 3, 3, 1, 1, 1, 1, 2, 1, 1, 3, 1, 3, 1, 3 };

	public static String[] findWords(String[] words) {
		boolean[] flag = new boolean[words.length];
		int i = 0, size = 0, index = 0;
		for (int j = 0; j < words.length; j++) {
			for (i = 1; i < words[j].length(); i++) {
				if (arr[Character.toLowerCase(words[j].charAt(i))
						- 'a'] != arr[Character.toLowerCase(words[j].charAt(i - 1)) - 'a'])
					break;
			}
			if (i == words[j].length()) {
				size++;
				flag[j] = true;
			}
		}

		String[] str = new String[size];
		for (i = 0; i < flag.length; i++) {
			if (flag[i] == true)
				str[index++] = words[i];

		}
		return str;
	}

	public static void main(String[] args) {
		String[] str = { "Happy", "Alaska", "Dad", "Peace" };
		System.out.println(Arrays.toString(findWords(str)));
	}

}
