package basics.tempcodes;

class Solution {
	public String longestPalindrome(String s) {
		int left = 0, right = 0, range = 0;

		for (int i = 0; i < s.length(); i++) {
			for (int j = 0; j <= Math.min(i, s.length() - i - 1) && s.charAt(i - j) == s.charAt(i + j); j++) {
				if (range < 2 * j + 1) {
					range = 2 * j + 1;
					left = i - j;
					right = i + j;
				}
			}
			for (int j = 1; j <= Math.min(i + 1, s.length() - i - 1) && s.charAt(i + 1 - j) == s.charAt(i + j); j++) {
				if (range < 2 * j) {
					range = 2 * j;
					left = i - j + 1;
					right = i + j;
				}
			}
		}

		return (right >= s.length()) ? s.substring(left) : s.substring(left, right + 1);
	}
}
