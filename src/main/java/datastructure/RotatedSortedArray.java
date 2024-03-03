//1752. Check if Array Is Sorted and Rotated

package datastructure;

public class RotatedSortedArray {

	public static boolean check(int[] nums) {
		int count = 0, n = nums.length;
		for (int i = 0; i < n; i++) {
			if (nums[i] > nums[(i + 1) % n])
				count++;
		}
		return count <= 1;
	}

	public static void main(String[] args) {
		int[] arr = { 8, 8, 14, 6, 8 };
		System.out.print(check(arr));
	}

}
