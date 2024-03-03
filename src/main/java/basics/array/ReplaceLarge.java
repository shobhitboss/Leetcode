package basics.array;

import java.util.Arrays;

public class ReplaceLarge {

	public static int[] replaceElements(int[] arr) {
		if (arr == null)
			return arr;
		int max = arr[arr.length - 1];
		arr[arr.length - 1] = -1;
		for (int i = arr.length - 2; i >= 0; i--) {
			int temp = arr[i];
			arr[i] = max;
			if (max < temp)
				max = temp;
		}
		return arr;
	}

	public static void main(String[] args) {
		int[] arr = { 17, 18, 5, 4, 6, 1 };
		System.out.println(Arrays.toString(replaceElements(arr)));
	}

}
