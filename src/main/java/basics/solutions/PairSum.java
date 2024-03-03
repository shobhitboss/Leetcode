package basics.solutions;

import java.util.HashMap;

public class PairSum {

	public static void main(String[] args) {
		int[] arr = { 2, 3, 4, 5, 8, 7, 10, 12, 13 };
		int pairSum = 15;
		HashMap<Integer, Integer> mapp = new HashMap<Integer, Integer>();
		for (int i : arr)
			mapp.put(i, pairSum - i);
		System.out.println(mapp.toString());
		mapp.keySet().removeIf(num -> !mapp.containsKey(mapp.get(num)));
		System.out.println(mapp.toString());
		mapp.keySet().removeIf(num -> mapp.containsKey(mapp.get(num)));
		System.out.println(mapp.toString());
	}
}
