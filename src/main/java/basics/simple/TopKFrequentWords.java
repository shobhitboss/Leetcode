//692. Top K Frequent Words    
package basics.simple;

import java.util.*;

public class TopKFrequentWords {

	public static int[] topKFrequentWords(int[] nums, int k) {
		List<Integer> ans = new ArrayList<>();
		Map<Integer, Integer> map = new TreeMap<>();

		for (int i : nums)
			map.put(i, map.getOrDefault(i, 0) + 1);

		map.entrySet().stream().sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
				.forEach(m -> ans.add(m.getKey()));

		int[] array = ans.subList(0, k).stream().mapToInt(i -> i).toArray();

		return array;
	}

	public static void main(String[] args) {
		int[] arr = { 1, 1, 1, 2, 2, 3 };
		System.out.println(Arrays.toString(topKFrequentWords(arr, 2)));
	}

}
