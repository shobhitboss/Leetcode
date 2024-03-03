package stringproblems;

public class BackspaceString {

	public boolean backspaceCompare(String s, String t) {
		int i = s.length() - 1, j = t.length() - 1;
		while (j != 0) {
			char l = s.charAt(i);
			char m = t.charAt(j);
			if (l == '#') {
				i--;
				continue;
			}
		}
		return false;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
