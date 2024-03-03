// 75. Sort Colors
package basics.simple;

import java.util.Arrays;

public class SortColors {

	public static void main(String[] args) {
		int nums[] = { 1, 2, 1, 0, 2, 0, 1, 2, 1, 0, 2 };
		int i = 0, zero = 0, two = nums.length - 1;
		while ((i <= two)) {
			if (nums[i] == 0) {
				nums[zero] = nums[i] + nums[zero] - (nums[i] = nums[zero]);
				zero++;
				i++;
				continue;
			} else if (nums[i] == 2) {
				nums[two] = nums[i] + nums[two] - (nums[i] = nums[two]);
				two--;
				continue;
			} else
				i++;
		}
		System.out.println(Arrays.toString(nums));
	}
}
