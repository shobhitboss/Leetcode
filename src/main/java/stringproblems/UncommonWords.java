package stringproblems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class UncommonWords {

	public static String[] uncommonFromSentences(String A, String B) {
		HashMap<String, Integer> map = new HashMap<>();
		for (String str : A.split(" "))
			map.put(str, map.getOrDefault(str, 0) + 1);
		for (String str : B.split(" "))
			map.put(str, map.getOrDefault(str, 0) + 1);
		List<String> common = new ArrayList<>();
		for (String str : A.split(" ")) {
			if (map.get(str) == 1)
				common.add(str);
		}
		for (String str : B.split(" ")) {
			if (map.get(str) == 1)
				common.add(str);
		}
		String[] res = new String[common.size()];
		common.toArray(res);
		return res;
	}

	public static void main(String[] args) {
		System.out.println(Arrays.toString(uncommonFromSentences("this apple is sweet", "this apple is sour")));

	}

}
