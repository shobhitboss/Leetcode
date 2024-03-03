//1389. Create Target Array in the Given Order
package basics.simple;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TargetArray {

	public static int[] createTargetArray(int[] nums, int[] index) {
		List<Integer> li = new ArrayList<>();
		int j = 0;
		for (int i : index)
			li.add(i, nums[j++]);
		int[] arr = li.stream().mapToInt(Integer::intValue).toArray();
		return arr;
	}

	public static void main(String[] args) {
		int[] nums = { 0, 1, 2, 3, 4 }, index = { 0, 1, 2, 2, 1 };
		System.out.print(Arrays.toString(createTargetArray(nums, index)));
	}

}
