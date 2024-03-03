package basics.array;

public class ValidMountainArray {

	public static boolean validMountainArray(int[] arr) {
		if (arr.length < 3)
			return false;
		int length = arr.length, i = 0, maxIndex = 0;
		while (i + 1 < length) {
			if (arr[i] > arr[i + 1]) {
				maxIndex = i;
				break;
			}
			i++;
		}
		boolean res = false;
		if (i == 0)
			return res;
		for (i = maxIndex; i > 0; i--) {
			if (arr[i - 1] >= arr[i])
				return res;
		}

		for (i = maxIndex + 1; i < length; i++) {
			if (arr[i - 1] <= arr[i])
				return res;
		}
		return true;
	}

	public static void main(String[] args) {
		int[] arr = { 4, 4, 3, 2, 1 };
		System.out.println(validMountainArray(arr));
	}

}
