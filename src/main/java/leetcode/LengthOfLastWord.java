package leetcode;

public class LengthOfLastWord {

	public static int lengthOfLastWord(String s) {
		int count = 0;
		s = s.trim();
		if (s.length() == 0 || s == null) {
			return 0;
		}
		for (int i = s.length() - 1; i >= 0; i--) {
			if (s.charAt(i) != ' ')
				count++;
			else
				break;
		}
		return count;
	}

	public static void main(String[] args) {
		System.out.println(lengthOfLastWord("a "));
	}

}
