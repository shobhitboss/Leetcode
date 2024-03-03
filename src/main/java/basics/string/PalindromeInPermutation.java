package basics.string;

public class PalindromeInPermutation {

	public static boolean isPalindromePossible(String s) {
		int[] arr = new int[26];
		int temp = 0, evenCount = 0, oddCount = 0, num = 0;
		for (char ch : s.toCharArray()) {
			num = ++arr[ch - 'a'];
			temp = num % 2 == 0 ? evenCount++ : oddCount++;
		}
		return oddCount - evenCount < 2 ? true : false;
	}

	public static boolean leetcodePalindromePossible(String s) {
		int i = 0, j = s.length() - 1;
		while (i < j) {
			if (s.charAt(i) != s.charAt(j)) {
				return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
			}
			i++;
			j--;
		}
		return true;
	}

	private static boolean isPalindrome(String s, int i, int j) {
		while (i < j) {
			if (j > i && s.charAt(i++) != s.charAt(j--))
				return false;
		}
		return true;
	}

	private static boolean palindromeInPermutation(String s) {
		char res = 0;
		for (char ch : s.toCharArray())
			res ^= ch;
		System.out.println(res);
		return Character.isLowerCase(res) || res == 0 ? true : false;
	}

	// Need to check
	private static char firstNonRepeatingChar(String s) {
		for (int i = 0; i < s.length(); i++) {
			for (int j = i + 1; j < s.length(); j++) {
				if (s.charAt(i) == s.charAt(j))
					break;
			}
			return s.charAt(i);
		}
		return 0;
	}

	public static void main(String[] args) {
		System.out.println(firstNonRepeatingChar("ss"));
		System.out.println(palindromeInPermutation("azzazza"));
		System.out.println(isPalindromePossible("thisiisthi"));
		System.out.println(leetcodePalindromePossible("deeee"));
	}
}
