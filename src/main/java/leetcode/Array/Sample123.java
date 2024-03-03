package leetcode.Array;

import java.util.Arrays;

public class Sample123 {

	public static void main(String[] args) {
		int[] arr = { 10, 9, 6, 8, 11, 7, 3, 2, 6, 1 };
		int N = arr.length;
		Arrays.sort(arr);
		System.out.println(Arrays.toString(arr));
		int ans = arr[N - 1];
		int j = 0, counter = 1, temp = 0, i = 0;
		for (i = N - 2; j < i; i--) {
			for (int k = 0; k < counter && j < i; k++) {
				temp += arr[j];
				j++;
			}
			ans = ans + (arr[i] - temp);
			temp = 0;
			counter++;
		}
		System.out.println("Answer is : " + ans);
	}

}
