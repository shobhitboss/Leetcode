package datastructure;

public class MonotonicArray {

	public static boolean isMonotonic(int[] A) {
		boolean increasing = true;
		boolean decreasing = true;
		for (int i = 1; i < A.length; i++) {
			if (A[i - 1] < A[i])
				increasing = false;
			if (A[i - 1] > A[i])
				decreasing = false;
		}
		return increasing || decreasing;
	}

	public static void main(String[] args) {
		int[] arr = { 1, 1, 2, 3, 4, 5, 8 };
		int[] arr2 = { 9, 8, 1, 6, 3, 2, 1 };
		System.out.println(isMonotonic(arr2));
	}

}
