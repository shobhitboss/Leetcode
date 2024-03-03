package basics.array;

import java.util.Arrays;

public class ReverseArray {

	public static void main(String[] args) {
		int[] arr = { 2, 4, 3, 5, 6, 4, 5, 3, 4, 7, 6, 4, 2 };
		System.out.println(Arrays.toString(arr));
		for (int i = 0, j = arr.length - 1; i < j; i++, j--)
			arr[j] = arr[i] + arr[j] - (arr[i] = arr[j]);
		System.out.println(Arrays.toString(arr));
	}
}
