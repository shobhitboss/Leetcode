package basics.array;

import java.util.Arrays;

public class SmallerNumberInArray {

	public static int[] smallerNumbersThanCurrent(int[] nums) {
		int[] arr = Arrays.copyOf(nums, nums.length), res = new int[nums.length];
		System.out.println(Arrays.toString(arr));
		Arrays.sort(arr);
		int k = 0;
		for (int i = 0; i < nums.length; i++) {
			k = 0;
			for (int j = 0; j < arr.length; j++) {
				if (nums[i] == arr[j])
					break;
				else
					k++;
			}
			res[i] = k;
		}
		return res;
	}

	public static void main(String[] args) {
		int[] arr = { 8, 1, 2, 2, 3 };
		System.out.println(Arrays.toString(smallerNumbersThanCurrent(arr)));
	}

}
