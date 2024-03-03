//1550. Three Consecutive Odds
package leetcode.Array;

public class ThreeConsecutiveOdds {

	public static boolean threeConsecutiveOdds(int[] arr) {
		if (arr.length <= 2)
			return false;
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] % 2 != 0 && i + 2 < arr.length)
				if (arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0)
					return true;
		}
		return false;
	}

	public static void main(String[] args) {
		int[] arr = { 2, 1, 1, 1 };
		System.out.println(threeConsecutiveOdds(arr));
	}
}
