//520. Detect Capital
package stringproblems;

public class DetectCapital {

	public static boolean detectCapitalUse(String word) {
		if (word.length() == 1)
			return true;
		else if (word.length() == 2) {
			if (Character.isLowerCase(word.charAt(0)) && Character.isUpperCase(word.charAt(1)))
				return false;
			else
				return true;
		} else {
			if (Character.isLowerCase(word.charAt(0)) && Character.isUpperCase(word.charAt(1)))
				return false;
			else {
				for (int i = 2; i < word.length(); i++) {
					if (Character.isLowerCase(word.charAt(i - 1)) && Character.isUpperCase(word.charAt(i))
							|| Character.isUpperCase(word.charAt(i - 1)) && Character.isLowerCase(word.charAt(i)))
						return false;
				}
			}
			return true;
		}
	}

	public static void main(String[] args) {
		System.out.println(detectCapitalUse("AHJERkhk"));
	}

}
