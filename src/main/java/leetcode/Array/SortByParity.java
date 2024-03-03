package leetcode.Array;

import java.util.Arrays;

public class SortByParity {

	public static int[] sortArrayByParity(int[] A) {
		int index = 0;
		for (int i = 0; i < A.length; i++) {
			if (A[i] % 2 == 0) {
				int temp = A[index];
				A[index++] = A[i];
				A[i] = temp;
			}
		}
		return A;
	}

	public static void main(String[] args) {
		int[] arr = { 0, 1, 2 };
		System.out.println(Arrays.toString(sortArrayByParity(arr)));
	}
}
