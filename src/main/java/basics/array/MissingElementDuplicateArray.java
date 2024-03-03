package basics.array;

public class MissingElementDuplicateArray {

	public static int missingElement(int[] arr1, int[] arr2) {
		int xor = arr1[0];
		for (int i = 1; i < arr1.length; i++) {
			xor ^= arr1[i];
		}
		for (int i = 0; i < arr2.length; i++) {
			xor ^= arr2[i];
		}
		return xor;
	}

	public static void main(String[] args) {
		int[] arr1 = { 1, 2, 3, 4, 5 };
		int[] arr2 = { 1, 3, 4, 5 };
		
		System.out.println(missingElement(arr1, arr2));
	}

}
