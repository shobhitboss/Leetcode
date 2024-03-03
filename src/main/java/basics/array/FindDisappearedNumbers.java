package basics.array;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class FindDisappearedNumbers {

	public static List<Integer> findDisappearedNumbers(int[] nums) {
		int n = nums.length;
		List<Integer> list = new ArrayList<>();
		HashSet<Integer> set = new HashSet<>();
		for (int i : nums)
			set.add(i);
		for (int i = 1; i < n; i++) {
			if (!set.contains(i))
				list.add(i);
		}
		return list;
	}

	public static void main(String args[]) {
		int[] nums = { 1, 2, 3, 2, 3, 4, 5, 6 };
		System.out.println(findDisappearedNumbers(nums));
	}

}
