package basics.others;

import java.util.Arrays;

public class DecompressEncodedLength {

	public static int[] decompressRLElist(int[] nums) {
		int size = 0, x = 0;
		for (int i = 0; i < nums.length; i += 2)
			size += nums[i];
		int[] arr = new int[size];
		for (int i = 1; i < nums.length; i += 2) {
			Arrays.fill(arr, x, x + nums[i - 1], nums[i]);
			x += nums[i - 1];
		}
		return arr;
	}

	public static void main(String[] args) {
		int[] arr = { 1, 2, 3, 4 };
		System.out.println(Arrays.toString(decompressRLElist(arr)));
	}

}
