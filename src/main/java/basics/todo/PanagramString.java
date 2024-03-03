package basics.todo;

import java.util.Arrays;

public class PanagramString {

	public static boolean isPanagram(String str) {
		int[] arr = new int[26];
		Arrays.fill(arr, 1);

		for (char ch : str.toLowerCase().toCharArray())
			if (Character.isLetter(ch) && arr[ch - 97] != 0)
				arr[ch - 97]--;

		for (int i : arr)
			if (i != 0)
				return false;

		return true;
	}

	public static void main(String[] args) {
		String str = "The quick Brown fox jumps over a Lazy Dog";
		System.out.println(isPanagram(str));
	}

}
