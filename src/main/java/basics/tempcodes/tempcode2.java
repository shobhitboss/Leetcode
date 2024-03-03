package basics.tempcodes;

import java.util.Map;
import java.util.TreeMap;

public class tempcode2 {

	public static void main(String args[]) throws NullPointerException {
		int[] arr = { 1, 2, 3, 4, 51 };

		Map<Integer, Integer> mapp = new TreeMap<Integer, Integer>();
		int j = 0;
		for (int i : arr)
			mapp.put(j++, i * i);

		System.out.println(mapp.toString() + " " + j);
		label:
		for (int i = j - 1; i >= 0; i--) {
			for (int k = i - 1; j >= 0; k--) {
				if (mapp.containsValue(mapp.get(i) - mapp.get(k))) {
					System.out.println("match found" + mapp.get(i) + " " + mapp.get(k));
					break label;
				}
			}
		}
	}
}
