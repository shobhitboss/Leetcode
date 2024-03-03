package leetcode.Array;

import java.util.Arrays;

public class SumZero {

	public static int[] sumZero(int n) {
		int[] arr = new int[n];
		int start = 0, num = 1;
		if (n % 2 != 0)
			start = 1;
		for (int i = start; i < n; i += 2) {
			arr[i] = num;
			arr[i + 1] = -num;
			num++;
		}
		return arr;
	}

	public static void main(String[] args) {
		System.out.println(Arrays.toString(sumZero(1)));
	}

}
