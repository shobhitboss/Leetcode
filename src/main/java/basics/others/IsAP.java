package basics.others;

import java.util.Arrays;

public class IsAP {

	public static boolean canMakeArithmeticProgression(int[] arr) {
		Arrays.sort(arr);
		for (int i = 1; i < arr.length - 1; i++) {
			if (Math.abs(arr[i] - arr[i - 1]) != Math.abs(arr[i + 1] - arr[i]))
				return false;
		}
		return true;
	}

	public static void main(String[] args) {
		int[] arr = { 5, 3, 1 };
		System.out.println(canMakeArithmeticProgression(arr));
	}

}
