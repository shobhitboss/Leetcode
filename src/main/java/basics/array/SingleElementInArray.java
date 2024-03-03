package basics.array;

public class SingleElementInArray {

	public static int singleElement(int[] arr) {
		int xor = arr[0];
		for (int i = 1; i < arr.length; i++) {
			xor ^= arr[i];
		}
		return xor;
	}

	public static void main(String[] args) {
		int[] arr = { 1, 1, 1, 2, 2, 1, 4, 5, 4 };
		System.out.println(singleElement(arr));
	}

}
