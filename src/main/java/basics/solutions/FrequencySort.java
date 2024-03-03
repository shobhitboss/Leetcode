package basics.solutions;

import java.util.*;
import java.util.Map.Entry;

public class FrequencySort {
	public static void main(String args[]) throws Exception {
		int arr[] = { 2, 3, 2, 5, 4, 29, 2, 23, 76, 23, 43, 8, 7, 8, 5, 7, 5, 7, 7, 7, 7, 7, 7, 7, 5, 7, 7, 9, 789,
				78978, 897, 89, 789, 789, 12, 2, 3, 3, 3, 12 };
		System.out.println(Arrays.toString(new FrequencySort().frequencySort(arr)));
	}

	private int[] frequencySort(int[] array) throws Exception {
		HashMap<Integer, Integer> arrMapp = new HashMap<Integer, Integer>();
		for (int num : array)
			arrMapp.put(num, arrMapp.getOrDefault(num, 0) + 1);
		System.out.println(arrMapp.toString());
		TreeMap<Integer, List<Integer>> mapp = new TreeMap<>();
		for (Entry<Integer, Integer> entry : arrMapp.entrySet()) {
			Integer key = entry.getKey();
			int value = entry.getValue();

			List<Integer> li = mapp.getOrDefault(value, new ArrayList<>());
			li.add(key);
			mapp.put(value, li);
		}
		System.out.println(mapp.toString());
		int temp = 0;
		for (int num : mapp.descendingKeySet()) {
			List<Integer> occ = new ArrayList<Integer>();
			occ = mapp.get(Integer.valueOf(num));
			Collections.sort(occ);
			for (int j = 0; j < occ.size(); j++)
				for (int i = 0; i < Integer.valueOf(num); i++)
					array[temp++] = occ.get(j);
		}
		return array;
	}
}