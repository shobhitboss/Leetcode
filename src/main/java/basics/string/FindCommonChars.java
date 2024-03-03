//1002. Find Common Characters
package basics.string;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class FindCommonChars {

	public static List<String> commonChars(String[] A) {
		List<String> ans = new ArrayList<String>();
		HashMap<Character, Integer> union = new HashMap<>();
		for (int i = 0; i < A[0].length(); i++)
			union.put(A[0].charAt(i), union.getOrDefault(A[0].charAt(i), 0) + 1);

		for (int i = 1; i < A.length; i++) {
			HashMap<Character, Integer> temp = new HashMap<>();
			for (int j = 0; j < A[i].length(); j++) {
				char curr = A[i].charAt(j);
				if (union.containsKey(curr))
					temp.put(curr, Math.min(union.get(curr), temp.getOrDefault(curr, 0) + 1));
			}
			union = temp;
		}

		for (char c : union.keySet()) {
			for (int i = 0; i < union.get(c); i++)
				ans.add(c + "");
		}

		return ans;
	}

	public static void main(String[] args) {
		String[] str = { "bcc", "ccd", "acc" };
		System.out.println(commonChars(str).toString());
	}

}
