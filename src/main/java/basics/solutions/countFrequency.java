package basics.solutions;

public class countFrequency {

	public static void main(String[] args) {

		int arr[] = { 2, 3, 3, 2, 5 };
		int n = arr.length;
		for (int i = 0; i < arr.length; i++) {
			arr[arr[i] % n] = arr[arr[i] % n] + n;
		}

		for (int i = 0; i < arr.length; i++) {
			System.out.println(i + "---" + arr[i]);
		}
	}

}
