package basics.string;

public class FirstNonRepeatedChar {
	public static int firstUniqChar(String s) {
		int ans = Integer.MAX_VALUE;
		for (int i = 'a'; i <= 'z'; i++) {
			int temp = s.indexOf((char) i);
			if (temp != -1 && temp == s.lastIndexOf((char) i)) {
				ans = Math.min(ans, temp);
			}
		}
		return ans == Integer.MAX_VALUE ? -1 : ans;
	}

	public static void main(String[] args) {
		System.out.println(firstUniqChar("shobhit"));
	}
}
