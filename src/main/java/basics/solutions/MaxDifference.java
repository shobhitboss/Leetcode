/*Program to find max difference in an array when max appears after min*/

package basics.solutions;

public class MaxDifference {
	public static void main(String[] args) {
		int arr[] = { 1, 2, 241, 22, 101, 6, 1, 100, 232, 33 };
		int size = arr.length;
		int maxDiff = -1;
		int tempMax = arr[size - 1];
		for (int i = size - 2; i >= 0; i--) {
			if (tempMax < arr[i])
				tempMax = arr[i];
			else if (tempMax > arr[i])
				maxDiff = Math.max(maxDiff, tempMax - arr[i]);
		}
		System.out.println("max : " + maxDiff);
	}
}
