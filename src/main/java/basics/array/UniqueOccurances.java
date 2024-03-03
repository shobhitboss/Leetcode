package basics.array;

import java.util.HashMap;

public class UniqueOccurances {

	public static boolean uniqueOccurrences(int[] arr) {
		HashMap<Integer, Integer> mapp = new HashMap<>();
		for (int num : arr)
			mapp.put(num, mapp.getOrDefault(num, 0) + 1);
		HashMap<Integer, Integer> counter = new HashMap<>();
		for (int num : mapp.keySet()) {
			if (counter.containsKey(mapp.get(num)))
				return false;
			else
				counter.put(mapp.get(num), num);
		}
		return true;
	}

	public static void main(String[] args) {

	}

}
