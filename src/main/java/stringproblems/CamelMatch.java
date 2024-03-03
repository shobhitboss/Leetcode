package stringproblems;

public class CamelMatch {

	private static boolean camelMatch(String str, String pattern) {
		if (getCamelCaseCount(str) == getCamelCaseCount(pattern) && matchSubsequence(str, pattern))
			return true;
		else
			return false;
	}

	private static int getCamelCaseCount(String str) {
		if (str == null || str == "")
			return 0;
		int count = 0;
		for (char ch : str.toCharArray())
			if (Character.isUpperCase(ch))
				count++;
		return count;
	}

	private static boolean matchSubsequence(String str, String pattern) {
		for (int i = 0, j = 0; i < str.length(); i++) {
			if (str.charAt(i) == pattern.charAt(j))
				j++;
			if (j == pattern.length())
				return true;
		}
		return false;
	}

	public static void main(String[] args) {
		System.out.println(camelMatch("ControlPanel", "CooP"));
	}

}
