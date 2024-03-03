package basics.simple;

import java.util.Arrays;

public class DuplicateZero {

	public static void duplicateZeros(int[] arr) {
		int count = 0, len = arr.length;
		for (int i = 0; i < len - count; i++) {
			if (arr[i] == 0) {
				if(i == len - count - 1) {
					arr[len - 1] = 0;
					len--;
					break;
				}
				else
					count++;
			}
		}
		
		int last = len - count  -1;
		
		for (int j = last; j >= 0; j--) {
			if (arr[j] == 0) {
				arr[j + count] = 0;
				count--;
			}
			arr[j + count] = arr[j];
		}

		System.out.println(Arrays.toString(arr));
	}

	public static void main(String[] args) {
//		int[] arr = { 9, 9, 9, 4, 8, 0, 0, 3, 7, 2, 0, 0, 0, 0, 9, 1, 0, 0, 1, 1, 0, 5, 6, 3, 1, 6, 0, 0, 2, 3, 4, 7, 0,
//				3, 9, 3, 6, 5, 8, 9, 1, 1, 3, 2, 0, 0, 7, 3, 3, 0, 5, 7, 0, 8, 1, 9, 6, 3, 0, 8, 8, 8, 8, 0, 0, 5, 0, 0,
//				0, 3, 7, 7, 7, 7, 5, 1, 0, 0, 8, 0, 0 };

		int[] arr1 = { 1, 0, 2, 3, 0, 4, 5, 0 };
		int[] arr2 = { 8, 4, 5, 0, 0, 0, 0, 7 };
		int[] arr3 = { 1, 5, 2, 0, 6, 8, 0, 6, 0 };
		duplicateZeros(arr1);
		duplicateZeros(arr2);
		duplicateZeros(arr3);

	}

}
