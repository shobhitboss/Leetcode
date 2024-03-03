package stringproblems;

public class ReverseWords {

	public static String reverseWords(String s) {
		String[] arr = s.split("\\s+");
		StringBuilder sb = new StringBuilder();
		for (int i = arr.length - 1; i >= 0; i--) {
			sb.append(arr[i].trim() + " ");
		}
		return sb.toString().trim();
	}

	public static void main(String[] args) {
		System.out.println(reverseWords("the sky       is blue"));

	}

}
