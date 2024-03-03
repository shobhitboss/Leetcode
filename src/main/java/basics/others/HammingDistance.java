package basics.others;

public class HammingDistance {

	public static int hammingDistance(int x, int y) {
		int res = 0;
		while (x > 0 || y > 0) {
			res += (x % 2) ^ (y % 2);
			x >>= 1;
			y >>= 1;
		}
		return res;
	}

	public static void main(String[] args) {
		System.out.println(hammingDistance(1, 4));
	}

}
