//929. Unique Email Addresses
package leetcode.Array;

import java.util.HashSet;

public class UniqueEmails {

	public static int numUniqueEmails(String[] emails) {
		HashSet<String> em = new HashSet<String>();
		for (String str : emails) {
			em.add(getEmail(str));
		}
		System.out.println(em.toString());
		return em.size();
	}

	private static String getEmail(String str) {
		StringBuilder sb = new StringBuilder();
		sb.setLength(0);
		for (int i = 0; i < str.length(); i++) {
			char ch = str.charAt(i);
			if (ch == '+' || ch == '@')
				break;
			if (ch != '.')
				sb.append(ch);
		}
		return sb.append(str.substring(str.indexOf('@'))).toString();
	}

	public static void main(String[] args) {
		String[] str = { "test.email+alex@leetcode.com", "test.email@leetcode.com" };
		System.out.println(numUniqueEmails(str));
	}

}
