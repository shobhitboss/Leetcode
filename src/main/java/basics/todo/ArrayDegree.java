//697. Degree of an Array
package basics.todo;

import java.util.HashMap;
import java.util.Map;

public class ArrayDegree {

	public static int findShortestSubArray(int[] nums) {
		int res = 0, maxSize = 0, firstMax = -1;
		Map<Integer, Integer> map = new HashMap<>();
		Map<Integer, Integer> firstOcc = new HashMap<>();
		Map<Integer, Integer> secOcc = new HashMap<>();
		for (int i = 0; i < nums.length; i++) {
			if (map.containsKey(nums[i])) {
				int temp = map.get(nums[i]);
				temp++;
				map.put(nums[i], temp);
				secOcc.put(nums[i], i);
			} else {
				map.put(nums[i], 1);
				firstOcc.put(nums[i], i);
				secOcc.put(nums[i], i);
			}
		}
		for (int i : map.keySet()) {
			if (maxSize < map.get(i)) {
				maxSize = map.get(i);
				firstMax = i;
				res = secOcc.get(firstMax) - firstOcc.get(firstMax) + 1;
			}
		}
		for (int i : map.keySet())
			if (map.get(i) == maxSize)
				res = res < secOcc.get(i) - firstOcc.get(i) + 1 ? res : secOcc.get(i) - firstOcc.get(i) + 1;
		return res;
	}

	public static void main(String[] args) {
		int[] nums = { 1, 3, 1, 4, 2, 3, 4, 5, 1, 2, 6, 4, 5, 6, 2, 5, 3, 3 };
		System.out.println("length : " + findShortestSubArray(nums));
	}

}
