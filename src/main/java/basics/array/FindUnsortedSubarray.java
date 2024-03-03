package basics.array;

public class FindUnsortedSubarray {

	public static int findUnsortedSubarray(int[] nums) {
		int start = 0, end = 0, i = 0, j = nums.length - 1;
		while (i < nums.length - 1) {
			if (nums[i] > nums[i + 1]) {
				start = i;
				break;
			}
			i++;
		}
		while (j > 0) {
			if (nums[j - 1] == nums[j]) {
				while (nums[j - 1] == nums[j]) {
					j--;
				}
			}

			if (nums[j - 1] > nums[j]) {
				end = j;
				break;
			}
			j--;
		}
		System.out.println("Start : " + start + " End : " + end);
		return end - start + 1;
	}

	public static void main(String[] args) {
		int[] arr = { 2, 4, 8, 10, 9, 9, 9, 15 };
		System.out.println(findUnsortedSubarray(arr));
	}

}
