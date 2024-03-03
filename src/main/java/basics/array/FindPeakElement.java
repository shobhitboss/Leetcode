package basics.array;

public class FindPeakElement {

	public int findPeakElement(int[] nums) {
		return findIndex(nums, 0, nums.length - 1);
	}

	private static int findIndex(int[] arr, int start, int end) {
		if (start == end)
			return start;
		else if (start + 1 == end) {
			if (arr[start] > arr[end])
				return start;
			return end;
		} else {
			int middle = start + ((end - start) / 2);
			if (arr[middle] > arr[middle - 1] && arr[middle] > arr[middle + 1])
				return middle;
			else if (arr[middle] < arr[middle - 1])
				return findIndex(arr, start, middle - 1);
			else
				return findIndex(arr, middle + 1, end);
		}
	}

	public static void main(String[] args) {

	}
}
