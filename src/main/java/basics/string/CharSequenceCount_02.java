package basics.string;

public class CharSequenceCount_02 {
	public static int compressString(char[] chars) {
		int index = 0;
		for (int i = 0; i <= chars.length - 1; i++) {
			int temp = 1;
			while (i != chars.length - 1 && chars[i + 1] == chars[i]) {
				temp++;
				i++;
			}
			chars[index++] = chars[i];
			if (temp > 1) {
				String num = String.valueOf(temp);
				for (char ch : num.toCharArray()) {
					chars[index++] = ch;
				}
			}
		}
		return index;
	}

	public static void containsDuplicate(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			
		}
	}

	public static void main(String args[]) throws Exception {
		compressString("assssffffwwwwffffsssssssssssssssssrjkewwlrkwjerlewkjrlwerjwelkrkjkjdffkdjfh".toCharArray());
		String abc = "assssffffwwwwffffsssssssssssssssssrjkewwlrkwjerlewkjrlwerjwelkrkjkjdffkdjfh";
		char[] chars = abc.toCharArray();
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i <= chars.length - 1; i++) {
			int temp = 1;
			while (i != chars.length - 1 && chars[i + 1] == chars[i]) {
				temp++;
				i++;
			}
			sb.append(chars[i]);
			if (temp > 1) {
				String num = String.valueOf(temp);
				for (char ch : num.toCharArray()) {
					sb.append(ch);
				}
			}
		}
		System.out.println(sb.toString() + " lenght : " + sb.length());
	}
}
