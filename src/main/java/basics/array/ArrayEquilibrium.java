package basics.array;

public class ArrayEquilibrium {

	public static void main(String[] args) {
		int[] arr = { 2, 3, 4, 5, 6, 4, 20 };
		int total = 0;
		for (int num : arr)
			total += num;
		int leftSum = 0, rightSum = 0, indexVal = 0;
		for (int i = 1; i < arr.length - 1; i++) {
			indexVal = arr[i];
			leftSum += arr[i - 1];
			rightSum = total - leftSum - indexVal;
			System.out.println("i:" + i + " " + " leftSum:" + leftSum + " " + " rightSum: " + rightSum);
			if (leftSum == rightSum) {
				System.out.println("Equilibrium at index: " + i + " value:" + indexVal);
				break;
			}
		}
	}
}
