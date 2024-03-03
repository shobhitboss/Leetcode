package basics.simple;

import java.util.Arrays;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;

public class SortArray {

	public static int[] topKFrequent(int[] nums) {
		int[] arr = new int[nums.length];
		Map<Integer, Integer> map = new TreeMap<>();

		for (int i : nums)
			map.put(i, map.getOrDefault(i, 0) + 1);

		int i = 0;
		for (Entry<Integer, Integer> entry : map.entrySet())
			Arrays.fill(arr, i, i += entry.getValue(), entry.getKey());
		
		return arr;
	}

	public static void main(String[] args) {
		int[] arr = { 5,1,1,2,0,0 };
		System.out.println(Arrays.toString(topKFrequent(arr)));
	}

}
