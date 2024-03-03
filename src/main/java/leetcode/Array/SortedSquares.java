package leetcode.Array;

import java.util.Arrays;

public class SortedSquares {

	public static int[] sortedSquares(int[] A) {
		int[] res = new int[A.length];
		int i = 0, j = A.length - 1, index = A.length - 1;
		while (i <= j) {
			if ((A[i] * A[i]) >= (A[j] * A[j])) {
				res[index--] = A[i] * A[i];
				i++;
			} else {
				res[index--] = A[j] * A[j];
				j--;
			}
		}
		return res;
	}

	public static void main(String[] args) {
		int[] arr = { -8, -5, -3, -1, 0, 0, 0, 0, 2, 4, 6, 8 };
		System.out.println(Arrays.toString(sortedSquares(arr)));
	}

}
