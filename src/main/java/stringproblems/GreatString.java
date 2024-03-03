//1544. Make The String Great
package stringproblems;

public class GreatString {

	public static String makeGood(String s) {
		StringBuilder sb = new StringBuilder();
		sb.append(s.charAt(0));
		for (int i = 1; i < s.length(); i++) {
			if (sb.length() > 0) {
				char ch = sb.charAt(sb.length() - 1);
				if (Math.abs(s.charAt(i) - ch) == 32) {
					sb.deleteCharAt(sb.length() - 1);
					continue;
				}
			}
			sb.append(s.charAt(i));
		}
		return sb.toString();
	}

	public static void main(String[] args) {
		String s = "aAeEaw";
		makeGood(s);
	}

}
