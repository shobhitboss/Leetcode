package basics.others;

import java.util.ArrayList;
import java.util.List;

public class KidsWithCandies {

	public static List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
		int max = -1, i = 0;
		List<Boolean> res = new ArrayList<>();
		while (i < candies.length) {
			if (candies[i] > max)
				max = candies[i];
			i++;
		}
		i = 0;
		while (i < candies.length) {
			if ((candies[i] + extraCandies) < max)
				res.add(false);
			else
				res.add(true);
			i++;
		}
		return res;
	}

	public static void main(String[] args) {
		int[] arr = { 1, 3, 5, 2, 4 };
		System.out.println(kidsWithCandies(arr, 2).toString());
	}

}
