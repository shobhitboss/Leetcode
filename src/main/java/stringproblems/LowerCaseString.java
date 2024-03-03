package stringproblems;

public class LowerCaseString {

	public static String toLowerCase(String str) {
		char[] arr = str.toCharArray();
		int i = 0;
		while (i < str.length()) {
			if (Character.isUpperCase(arr[i]))
				arr[i] += 32;
			i++;
		}
		return String.valueOf(arr);
	}

	public static void main(String[] args) {
		System.out.println(toLowerCase("shoBHit"));
	}

}
