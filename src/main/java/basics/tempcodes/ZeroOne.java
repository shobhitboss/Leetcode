package basics.tempcodes;

import java.util.Arrays;

public class ZeroOne {

	public static void main(String[] args) {
		int[] arr = { 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0 };
		int count = 0, i = 0;
		while (i < arr.length) {
			if (arr[i] == 0)
				arr[count++] = arr[i];
			i++;
		}
		Arrays.fill(arr, count, arr.length, 1);
		System.out.println(Arrays.toString(arr));
	}
}
