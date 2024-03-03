package basics.array;

import java.util.Arrays;

public class RotateArrayByIndexSize {

	public static int[] rotateByIndex(int[] nums, int k) {
		if (k % nums.length == 0)
			return nums;

		k %= nums.length;
		int[] temp = new int[k];
		int i = 0, p = 0;
		for (i = nums.length - k; i < nums.length; i++)
			temp[p++] = nums[i];

		p = nums.length - 1;
		for (i = nums.length - k - 1; i >= 0; i--)
			nums[p--] = nums[i];

		for (i = 0; i < k; i++)
			nums[i] = temp[i];

		return nums;
	}

	public static int[] reverseArray(int[] nums, int i, int j) {
		for (; i < j; i++, j--) {
			int temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
		}
		return nums;
	}

	public static int[] rotateByIndex2(int[] nums, int k) {
		nums = reverseArray(nums, 0, nums.length - 1);
		nums = reverseArray(nums, 0, k - 1);
		nums = reverseArray(nums, k, nums.length - 1);

		return nums;
	}

	public static void main(String[] args) {
		int[] arr = { 1, 2, 3, 4, 5, 6 };
		System.out.println(Arrays.toString(rotateByIndex2(arr, 2)));
	}

}
