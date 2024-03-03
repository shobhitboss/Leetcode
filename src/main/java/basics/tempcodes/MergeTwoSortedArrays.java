package basics.tempcodes;

import java.util.Arrays;

public class MergeTwoSortedArrays {

	public static void main(String[] args) {
		int[] arr1 = { 1, 2, 6, 8, 23, 43, 54, 56, 58, 121, 211 };
		int[] arr2 = { 3, 9 };
		System.out.println(Arrays.toString(mergeTwoSortedArray(arr1, arr2)));
	}

	public static int[] mergeTwoSortedArray(int[] arr1, int[] arr2) {
		int[] arr = new int[arr1.length + arr2.length];
		int i = 0, j = 0, k = 0;
		while (i < arr1.length && j < arr2.length) {
			if (arr1[i] <= arr2[j])
				arr[k++] = arr1[i++];
			else
				arr[k++] = arr2[j++];
		}
		if (i < arr1.length)
			for (int l = i; l < arr1.length; l++)
				arr[k++] = arr1[l];
		else
			for (int l = j; l < arr2.length; l++)
				arr[k++] = arr2[l];
		return arr;
	}
}
