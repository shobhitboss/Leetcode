//1200. Minimum Absolute Difference
package basics.array;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MinDiff {

	public static List<List<Integer>> minimumAbsDifference(int[] arr) {
		List<List<Integer>> res = new ArrayList<>();
		Arrays.sort(arr);
		int minDiff = arr[1] - arr[0];
		for (int i = 2; i < arr.length; i++) {
			if (minDiff > arr[i] - arr[i - 1])
				minDiff = arr[i] - arr[i - 1];
		}
		for (int i = 1; i < arr.length; i++) {
			if (arr[i] - arr[i - 1] == minDiff) {
				List<Integer> li = new ArrayList<>();
				li.add(arr[i - 1]);
				li.add(arr[i]);
				res.add(li);
			}
		}
		return res;
	}

	public static void main(String[] args) {
		int[] arr = { 4, 2, 1, 3 };
		System.out.println(minimumAbsDifference(arr).toString());
	}

}
