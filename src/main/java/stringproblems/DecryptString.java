///Decrypt String from Alphabet to Integer Mapping

package stringproblems;

import java.util.Arrays;

public class DecryptString {

	public static String freqString(String s) {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < s.length(); i++) {
			if (i + 2 < s.length() && s.charAt(i + 2) == '#') {
				sb.append((char) (Integer.parseInt(s.substring(i, i + 2)) + 96));
				i += 2;
			} else
				sb.append((char) (s.charAt(i) + 48));
		}
		return sb.toString();
	}

	public static void main(String[] args) {
		int[] arr = { 1, 2, 3 };
		int[] temp = Arrays.copyOf(arr, arr.length);
		System.out.println(Arrays.toString(temp));
		System.out.println(freqString("10#12#12#14#123232"));
	}

}
