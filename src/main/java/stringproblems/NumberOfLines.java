//806. Number of Lines To Write String

package stringproblems;

import java.util.Arrays;

public class NumberOfLines {

	public static int[] numberOfLines(int[] widths, String S) {
		int lines = 1, letter = 0;
		for (char ch : S.toCharArray()) {
			if (letter + widths[ch - 'a'] > 100) {
				lines++;
				letter = 0;
			}
			letter += widths[ch - 'a'];
		}
		int[] arr = { lines, letter };
		return arr;
	}

	public static void main(String[] args) {
		int[] widths = { 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
				10, 10 };
		String S = "abcdefghijklmnopqrstuvwxyz";
		System.out.println(Arrays.toString(numberOfLines(widths, S)));
	}

}
