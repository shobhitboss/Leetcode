package basics.array;

import java.util.Arrays;

public class ThirdMax {

	public static int thirdMax(int[] nums) {
		int length = nums.length;
		int counter = 0, max = Integer.MIN_VALUE, sMax = max, tMax = max;
		for (int i = 0; i < length; i++) {
			if (max <= nums[i]) {
				tMax = sMax;
				sMax = max;
				max = nums[i];
			} else if (sMax < nums[i] && nums[i] != max) {
				tMax = sMax;
				sMax = nums[i];
			} else if (tMax < nums[i] && nums[i] != max && nums[i] != sMax) {
				counter = counter + 1;
				tMax = nums[i];
			}
		}
		return tMax != Integer.MIN_VALUE ? tMax : max;
	}

	public static void main(String[] args) {
		// int[] arr = { 1, 2, 2, 1, 4, 6, 7, 3, 2, 5, 7, 22, 6, 7, 345, 25, 67, 75, 32,
		// 6, 56, 3, 2, 3 };

		int[] arr = { 1, 2, -2147483648 };
		Arrays.sort(arr);
		System.out.println(Arrays.toString(arr));
		System.out.println(thirdMax(arr));
	}
}
