package basics.array;

import java.util.Arrays;

public class HeightChecker {

	public int heightChecker(int[] heights) {
		if (heights.length < 2)
			return 0;
		int res = 0;
		int[] arr = Arrays.copyOf(heights, heights.length);
		Arrays.sort(arr);
		for (int i = 0; i < heights.length; i++) {
			if (arr[i] != heights[i])
				res++;
		}
		return res;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
