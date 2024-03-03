//1122. Relative Sort Array

package datastructure;

import java.util.*;
import java.util.Map.Entry;

public class RelativeSort {

	public static int[] relativeSortArray(int[] arr1, int[] arr2) {
		int[] arr = new int[arr1.length];
		List<Integer> li = new ArrayList<>();
		Map<Integer, Integer> mapp = new LinkedHashMap<>();

		for (int i : arr2)
			mapp.put(i, mapp.getOrDefault(i, 0));

		for (int i : arr1) {
			if (mapp.containsKey(i))
				mapp.put(i, mapp.get(i) + 1);
			else if (!mapp.containsKey(i))
				li.add(i);
		}

		Collections.sort(li);
		int i = 0;

		for (Entry<Integer, Integer> entry : mapp.entrySet())
			Arrays.fill(arr, i, i += entry.getValue(), entry.getKey());

		for (int j : li)
			arr[i++] = j;

		return arr;
	}

	public static void main(String[] args) {
		int[] arr1 = { 2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19 }, arr2 = { 2, 1, 4, 3, 9, 6 };
		relativeSortArray(arr1, arr2);
	}

}
