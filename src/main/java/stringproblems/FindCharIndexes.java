package stringproblems;

import java.util.ArrayList;
import java.util.List;

public class FindCharIndexes {

	public static List<Integer> findAllIndexes(String str, char ch) {
		List<Integer> li = new ArrayList<>();
		int index = 0;
		while (index < str.length()) {
			index = str.indexOf(ch, index);
			if (index == -1)
				break;
			li.add(index);
			index++;
		}
		return li;
	}

	public static void main(String[] args) {
		System.out.println(findAllIndexes("leet..code.test.com", '.').toString());
	}

}
