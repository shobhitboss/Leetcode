package stringproblems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class OccAfterBigram {

	public static String[] findOcurrences(String text, String first, String second) {
		List<String> third = new ArrayList<>();
		int index = 0;
		String str = first + " " + second;
		StringBuilder sb = new StringBuilder();
		while (index < text.length()) {
			index = text.indexOf(str, index);
			if (index == -1)
				break;
			int temp = index + str.length() + 1;
			sb.setLength(0);
			while (temp < text.length()) {
				if (text.charAt(temp) == ' ')
					break;
				sb.append(text.charAt(temp));
				temp++;
			}
			third.add(sb.toString());
			index += str.length();
		}
		index = 0;
		String[] res = new String[third.size()];
		for (String s : third)
			if (s.length() > 0)
				res[index++] = s;
		return res;
	}

	public static void main(String[] args) {
		String text = "alice is aa good girl she is a good student", first = "a", second = "good";
		System.out.println(Arrays.toString(findOcurrences(text, first, second)));
	}
}
