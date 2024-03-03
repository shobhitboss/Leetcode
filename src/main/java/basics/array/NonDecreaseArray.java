package basics.array;

public class NonDecreaseArray {

	public static void main(String[] args) {

		int[] arr = { 3, 4, 2, 3 };
		System.out.println(checkPossibility(arr));
	}

	public static boolean checkPossibility(int[] nums) {
		int count = 0;
		if (nums[nums.length - 1] < nums[nums.length - 2]) {
			count++;
		}
		for (int i = nums.length - 2; i >= 0; i--) {
			if (nums[i + 1] < nums[i]) {
				if (count == 2)
					break;
				count++;
			}
		}
		System.out.println(count);
		return count < 2 ? true : false;
	}
}
