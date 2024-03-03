package basics.others;

import java.util.Arrays;

public class DistributeCandies {

	public static int getReverseSigma(int num) {
		int sqRoot = (int) Math.sqrt(num * 8 + 1);
		return (sqRoot - 1) / 2;
	}

	public static int getSigma(int num) {
		return num * (num + 1) / 2;
	}

	public static int[] distributeCandies(int candies, int num_people) {
		int[] res = new int[num_people];
		int current = 1;
		while (candies > 0) {
			for (int i = 0; i < res.length; i++) {
				if (candies >= current) {
					res[i] = current;
					candies -= current;
					current++;
				} else {
					res[i] = candies;
					candies = 0;
					break;
				}
			}
		}
		System.out.println(Arrays.toString(res));
		return res;
	}

	public static void main(String args[]) {
		distributeCandies(10, 3);
	}
}
