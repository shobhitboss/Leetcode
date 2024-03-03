package basics.others;

import java.util.Arrays;

public class MaxRepeatedNumber {

	public static void main(String[] args) {
		int[] arr = { 2, 3, 3, 5, 3, 4, 1, 7 };
		int size = arr.length;
		for (int i = 0; i < arr.length; i++) {
			arr[arr[i] % size] += size;
		}
		int max = 0, loc = 0;
		for (int i = 0; i < arr.length; i++) {
			if (max < arr[i]) {
				max = arr[i];
				loc = i;
			}
		}
		System.out.println(Arrays.toString(arr));
		System.out.println("max : " + max + " " + "loc : " + loc);
	}

}