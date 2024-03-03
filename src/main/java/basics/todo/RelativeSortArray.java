///1122. Relative Sort Array
package basics.todo;

import java.util.HashMap;
import java.util.PriorityQueue;

public class RelativeSortArray {

	public static int[] relativeSortArray(int[] arr1, int[] arr2) {
		HashMap<Integer, Integer> map = new HashMap<>();
		HashMap<Integer, Integer> map2 = new HashMap<>();
		int index = 1;
		for (int i : arr2)
			map.put(i, index++);
		for (int i : arr1)
			map2.put(i, map.getOrDefault(i, 0) + 1);
		System.out.println(map.toString());
		PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> map.get(a) - map.get(b));
		for (int i : map2.keySet())
			maxHeap.add(i);
		System.out.println(maxHeap.toString());
		return null;
	}

	public static void main(String[] args) {
		int[] arr1 = { 2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19 }, arr2 = { 2, 1, 4, 3, 9, 6 };
		relativeSortArray(arr1, arr2);
	}

}
