package basics.string;

public class ReverseString {

	public static String Palindrome(String str) {
		char[] arr = str.replaceAll("\\s+", "").toCharArray();
		String res = "true";
		int i = 0, j = arr.length - 1;
		while (i < j) {
			if (arr[i] != arr[j]) {
				res = "false";
				break;
			}
			i++;
			j--;
		}
		return res;
	}

	public static void main(String[] args) {
		String str = "never odd or even";
		System.out.println(Palindrome(str));
	}
}
