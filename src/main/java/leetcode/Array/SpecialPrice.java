package leetcode.Array;

import java.util.Arrays;

public class SpecialPrice {

	public static int[] finalPrices(int[] prices) {
		if (prices == null || prices.length < 2)
			return prices;
		for (int i = 0; i < prices.length - 1; i++) {
			for (int j = i + 1; j < prices.length; j++) {
				if (prices[j] <= prices[i]) {
					prices[i] -= prices[j];
					break;
				}
			}
		}
		return prices;
	}

	public static void main(String[] args) {
		int[] arr = { 5, 4, 10, 2, 6, 1, 1, 1, 9, 1 };
		// { 1, 2, 8, 1, 5, 0, 0, 0, 8, 1}
		System.out.println(Arrays.toString(finalPrices(arr)));
	}

}
