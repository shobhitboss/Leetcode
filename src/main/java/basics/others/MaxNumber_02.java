package basics.others;

import java.util.Collections;
import java.util.Comparator;
import java.util.Vector;

public class MaxNumber_02 {

	public static void main(String[] args) {
		Vector<String> arr = new Vector<>();
		arr.add("54");
		arr.add("546");
		arr.add("548");
		arr.add("60");
		printLargest(arr);
	}

	static void printLargest(Vector<String> arr) {
		Collections.sort(arr, new Comparator<String>() {
			@Override
			public int compare(String X, String Y) {
				String XY = X + Y;
				String YX = Y + X;
				return XY.compareTo(YX) > 0 ? -1 : 1;
			}
		});
		System.out.println(arr.toString());
	}
}
