package basics.tempcodes;

import java.util.Arrays;

public class MergeArray {

	public static int[] mergeArray(int[] arr1, int[] arr2) {
		int i = arr1.length, j = arr2.length;
		int[] mergedArr = new int[i + j];
		int a = 0, b = 0, index = 0;
		while (a < i && b < j) {
			if (arr1[a] <= arr2[b])
				mergedArr[index++] = arr1[a++];
			else
				mergedArr[index++] = arr2[b++];
		}
		if (b < j) {
			while (b < j)
				mergedArr[index++] = arr2[b++];
		} else if (a < i) {
			while (a < i)
				mergedArr[index++] = arr1[a++];
		}
		System.out.println(Arrays.toString(mergedArr));
		return mergedArr;
	}

	public static void main(String[] args) {
		int[] arr1 = { 1, 2, 3, 4, 6 };
		int[] arr2 = { 2, 4, 5, 6, 6, 7, 8 };
		mergeArray(arr1, arr2);
	}

}
