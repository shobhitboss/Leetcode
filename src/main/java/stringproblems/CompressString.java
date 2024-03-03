package stringproblems;

public class CompressString {

	public static char[] compressString(char[] str) {
		int index = 0;
		int i = 0, j = 0;
		while (i < str.length) {
			while (j < str.length && str[j] == str[i]) {
				j++;
			}
			str[index++] = str[i];
			if (j - i > 1) {
				String count = j - i + "";
				for (char ch : count.toCharArray())
					str[index++] = ch;
			}
			i = j;
		}
		System.out.println(String.valueOf(str));
		return str;
	}

	public static void main(String[] args) {
		compressString("aaaaaaaaaaaaaaaaaaaaaabbbababababaaaababaaaa".toCharArray());
	}
}
