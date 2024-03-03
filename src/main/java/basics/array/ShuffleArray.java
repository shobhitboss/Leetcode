package basics.array;

import java.util.Arrays;

public class ShuffleArray {

	public static int[] shuffle(int[] nums, int n) {
		int[] num = new int[n];
		int j = 0;
		for (int i = n; i < nums.length; i++)
			num[j++] = nums[i];
		System.out.println(Arrays.toString(num));
		for (int i = 2 * n - 2, k = n - 1; i > 0; i -= 2, k--) {
			nums[i] = nums[k];
		}
		System.out.println(Arrays.toString(nums));
		j = 0;
		for (int i = 1; i < nums.length; i += 2)
			nums[i] = num[j++];
		return nums;
	}

	public static void main(String[] args) {
		int[] nums = { 2, 5, 1, 3, 4, 7 };
		System.out.println(Arrays.toString(shuffle(nums, 3)));
	}

}
