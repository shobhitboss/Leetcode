package basics.array;

public class XKindInDeck {

	public static boolean hasGroupsSizeX(int[] deck) {
		if (deck.length <= 1)
			return false;
		int[] res = new int[10001];
		for (int i = 0; i < deck.length; i++)
			res[deck[i]]++;
		int g = res[0];
		for (int i = 0; i < deck.length; i++) {
			if (res[deck[i]] == 1)
				return false;
			g = GCD(res[deck[i]], g);
		}
		return g < 2 ? false : true;
	}

	private static int GCD(int a, int b) {
		if (a == 0)
			return b;
		return GCD(b % a, a);
	}

	public static void main(String[] args) {
		System.out.println(GCD(112, 112));

		int[] arr = { 1, 1, 1, 2, 2, 2, 3, 3 };
		System.out.println(hasGroupsSizeX(arr));
	}
}
