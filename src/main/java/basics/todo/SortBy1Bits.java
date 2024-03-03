//1356. Sort Integers by The Number of 1 Bits
package basics.todo;

import java.util.Arrays;

public class SortBy1Bits {

	public static int[] sortByBits(int[] arr) {
		int[] res = new int[arr.length];
		for (int i = 0; i < arr.length; i++) {
			res[i] = get1Bits(arr[i]);
		}
		Arrays.sort(res);
		System.out.println(Arrays.toString(res));
		return res;
	}

	private static int get1Bits(int num) {
		int count = 0;
		if (num % 2 != 0)
			count++;
		num >>= 1;
		return count;
	}

	public static void main(String[] args) {
		int[] arr = { 0, 1, 2, 3, 4, 5, 6, 7, 8 };
		sortByBits(arr);
	}

}	
