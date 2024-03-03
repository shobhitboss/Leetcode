//1684. Count the Number of Consistent Strings
package basics.simple;

public class ConsistentStrings {

	public static int countConsistentStrings(String allowed, String[] words) {
		int[] arr = new int[26];
		int count = 0;
		for (char ch : allowed.toCharArray())
			arr[ch - 97]++;
		for (String str : words) {
			for (char ch : str.toCharArray()) {
				if (arr[ch - 97] == 0) {
					count--;
					break;
				}
			}
			count++;
		}
		return count;
	}

	public static void main(String[] args) {
		String allowed = "ab";
		String[] words = { "ad", "bd", "aaab", "baa", "badab" };
		System.out.println(countConsistentStrings(allowed, words));
	}

}
