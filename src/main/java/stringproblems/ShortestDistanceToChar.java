//821. Shortest Distance to a Character
package stringproblems;

import java.util.Arrays;

public class ShortestDistanceToChar {
	public static int[] shortestToChar(String S, char C) {
		int[] res = new int[S.length()];
		res[0] = S.indexOf(C);
		int i = 0;
		for (i = 1; i <= S.lastIndexOf(C); i++) {
			if (S.charAt(i) != C) {
				int temp = S.indexOf(C, i) - i;
				if (temp < res[i - 1] + 1)
					res[i] = temp;
				else
					res[i] = res[i - 1] + 1;
			}
		}
		for (; i < S.length(); i++)
			res[i] = res[i - 1] + 1;
		return res;
	}

	public static void main(String[] args) {
		System.out.println(Arrays.toString(shortestToChar("thisisnewtestforshortestchar", 't')));
	}

}
