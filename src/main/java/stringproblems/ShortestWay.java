package stringproblems;

public class ShortestWay {

	public static int shortestWay(String source, String target) {
		int i = 0, j = 0, result = 0;
		while (j < target.length()) {
			i = source.indexOf(target.charAt(j));
			if (i > -1) {
				while (j < target.length() && i < source.length() && source.charAt(i) == target.charAt(j)) {
					i++;
					j++;
				}
				result++;
			} else
				return -1;
		}
		return j == target.length() ? result : -1;
	}

	public static void main(String[] args) {
		System.out.println(shortestWay("xyz", "xzyxz"));
	}

}
