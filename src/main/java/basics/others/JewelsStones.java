package basics.others;

public class JewelsStones {

	public static int numJewelsInStones(String J, String S) {
		int[] arr = new int[52];
		for (char ch : J.toCharArray()) {
			if (Character.isUpperCase(ch))
				arr[ch - 65]++;
			else
				arr[ch - 97 + 26]++;
		}
		int jewels = 0;
		for (char ch : S.toCharArray())
			if (Character.isUpperCase(ch)) {
				if (arr[ch - 65] == 1)
					jewels++;
			} else {
				if (arr[ch - 97 + 26] == 1)
					jewels++;
			}

		return jewels;
	}

	public static void main(String[] args) {
		System.out.println(numJewelsInStones("z", "ZZ"));
	}

}
