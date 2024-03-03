package basics.string;

public class RevStrWithSC {

	public String reverseOnlyLetters(String S) {
		char[] arr = S.toCharArray();
		int i = 0, j = arr.length - 1;
		while (i < j) {
			if (j > i && !Character.isAlphabetic(arr[i])) {
				i++;
				continue;
			}
			if (j > i && !Character.isAlphabetic(arr[j])) {
				j--;
				continue;
			}
			char temp = arr[i];
			arr[i++] = arr[j];
			arr[j--] = temp;
		}
		return String.valueOf(arr);
	}

	public static void main(String[] args) {
		String str = "test#$$%is#$@#chars";
		char[] arr = str.toCharArray();
		StringBuffer sb = new StringBuffer();
		for (char ch : arr) {
			if (ch > 96 && ch < 123)
				sb.append(ch);
		}
		int temp = sb.length() - 1;
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] > 96 && arr[i] < 123)
				arr[i] = sb.charAt(temp--);
		}
		System.out.println(str + "\n" + String.valueOf(arr));
	}
}
