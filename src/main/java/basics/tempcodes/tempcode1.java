package basics.tempcodes;

import java.util.HashMap;

public class tempcode1 {

	public static void main(String[] args) {
		char[] arr1 = { 'a', 'b', 'c', 'd' };
		char[] arr2 = { 'm', 'n', 'b', 'o', 'p', 'a', 'p', 'a', 'c', 'd' };
		System.out.println(isSubset(arr1, arr2));
	}

	public static boolean isSubset(char[] arr1, char[] arr2) {
		HashMap<Character, Integer> mapp = new HashMap<Character, Integer>();
		for (char ch : arr2)
			mapp.put(ch, mapp.getOrDefault(ch, 1) + 1);
		for (char ch : arr1) {
			if (!mapp.containsKey(ch))
				return false;
			else if (mapp.get(ch) == 0)
				return false;
			else
				mapp.put(ch, mapp.get(ch) - 1);
		}
		return true;
	}

}
