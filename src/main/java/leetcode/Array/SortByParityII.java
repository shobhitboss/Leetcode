//	922. Sort Array By Parity II
package leetcode.Array;

import java.util.Arrays;

public class SortByParityII {

	public static int[] sortArrayByParityII(int[] A) {
		int i = 0, j = 1;
		while (i < A.length && j < A.length) {
			if (A[i] % 2 != 0) {
				A[i] = A[i] + A[j] - (A[j] = A[i]);
				j += 2;
			} else
				i += 2;
		}
		return A;
	}

	public static void main(String[] args) {
		int[] arr = { 4, 2, 5, 7 };
		System.out.println(Arrays.toString(sortArrayByParityII(arr)));
	}

}
