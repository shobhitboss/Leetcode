package basics.array;

import java.util.ArrayList;
import java.util.List;

public class SelfDividingNumber {

	public static List<Integer> selfDividingNumbers(int left, int right) {
		List<Integer> res = new ArrayList<Integer>();
		for (int i = left; i <= right; i++) {
			if (isSelfDivisible(i))
				res.add(i);
		}
		return res;
	}

	private static boolean isSelfDivisible(int num) {
		for (char ch : String.valueOf(num).toCharArray()) {
			if (ch == 48)
				return false;
			if (num % Character.getNumericValue(ch) != 0)
				return false;
		}
		return true;
	}

	public static void main(String[] args) {
		System.out.println(selfDividingNumbers(4, 546).toString());
	}

}
