package stringproblems;

public class BackspaceStringCompare {

	public static boolean backspaceCompare(String S, String T) {
		return getString(S).equals(getString(T));
	}

	public static String getString(String S) {
		int i = 0, j = 0;
		StringBuilder sb = new StringBuilder();
		while (i < S.length()) {
			if (S.charAt(i) == '#') {
				if (j - 1 >= 0) {
					sb.deleteCharAt(--j);
				}
				i++;
				continue;
			}
			if (S.charAt(i) != '#')
				sb.append(S.charAt(i));
			i++;
			j++;
		}
		return sb.toString();
	}

	public static void main(String[] args) {
		System.out.println(backspaceCompare("a##c", "#a#c"));
		System.out.println(backspaceCompare("bxj##tw", "bxj###tw"));
		System.out.println(backspaceCompare("ab##", "c#d#"));
		System.out.println(backspaceCompare("y#fo##f", "y#f#o##f"));
	}

}
