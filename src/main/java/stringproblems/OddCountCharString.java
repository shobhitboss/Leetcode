package stringproblems;

import java.util.Arrays;

public class OddCountCharString {

	public static String generateTheString(int n) {
		char[] arr = new char[n];
		Arrays.fill(arr, 'a');
		if (n % 2 == 0)
			arr[n - 1] = 'b';
		return String.valueOf(arr);
	}

	public static void main(String[] args) {
		System.out.println(generateTheString(5));
	}

}
