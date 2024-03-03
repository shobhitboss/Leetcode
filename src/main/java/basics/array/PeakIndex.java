//Peak Index in a Mountain Array

package basics.array;

public class PeakIndex {

	public static int peakIndexInMountainArray(int[] arr) {
		return findIndex(arr, 1, arr.length - 2);
	}

	private static int findIndex(int[] arr, int start, int end) {
		int middle = start + ((end - start) / 2);
		if (arr[middle] > arr[middle - 1] && arr[middle] > arr[middle + 1])
			return middle;
		else if (arr[middle] < arr[middle - 1])
			return findIndex(arr, start, middle - 1);
		else
			return findIndex(arr, middle + 1, end);
	}

	public static void main(String[] args) {
		int[] arr = { 24, 69, 100, 99, 79, 78, 67, 36, 26, 19 };
		System.out.println(peakIndexInMountainArray(arr));
	}

}
