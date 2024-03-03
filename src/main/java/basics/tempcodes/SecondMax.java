package basics.tempcodes;

public class SecondMax {

	public static int getSecondMax(int[] arr) {
		if (arr.length <= 1)
			return 0;
		int fMax = Integer.MIN_VALUE;
		int sMax = Integer.MIN_VALUE;

		for (int i = 0; i < arr.length; i++) {
			if (fMax < arr[i]) {
				sMax = fMax;
				fMax = arr[i];
			} else if (sMax < arr[i]) {
				sMax = arr[i];
			}
		}
		return sMax;
	}

	public static void main(String[] args) {
		int[] arr = { 1, -2, -3, -10 };
		System.out.println(getSecondMax(arr));
	}

}
