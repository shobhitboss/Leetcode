package basics.string;

public class CharCount {
	public static void main(String[] args) {
		String str = "aaabbdkkak";
		StringBuilder sb = new StringBuilder();
		int count = 1;
		for (int i = 0; i < str.length(); i++) {
			if (i + 1 < str.length() && str.charAt(i) == str.charAt(i + 1)) {
				count++;
				continue;
			}
			sb.append(str.charAt(i) + "" + count);
			count = 1;
		}
		System.out.println(sb.toString());
	}
}
