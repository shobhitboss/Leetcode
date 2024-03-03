//1047. Remove All Adjacent Duplicates In String
package stringproblems;

import java.util.Stack;

public class RemoveDuplicates {

	public static String removeDuplicates(String S) {
		Stack<Character> st = new Stack<>();
		for (char ch : S.toCharArray()) {
			if (!st.isEmpty() && st.peek() == ch)
				st.pop();
			else
				st.push(ch);
		}
		StringBuilder sb = new StringBuilder();
		for (char ch : st) {
			sb.append(ch);
		}
		return sb.toString();
	}

	public static void main(String[] args) {
		System.out.println(removeDuplicates("aabbaaca"));
	}

}
