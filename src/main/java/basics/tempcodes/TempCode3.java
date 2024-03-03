package basics.tempcodes;

public class TempCode3 {

	public static boolean isCyclic(String str1, String str2) {
		str1 = str1 + str1;
		System.out.println(str1 + "\n" + str2);
		return str1.contains(str2);
	}

	public static String reverseString(String str) {
		char[] arr = str.toCharArray();
		for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
			if (arr[i] == ' ') {
				j++;
				continue;
			}
			if (arr[j] == ' ') {
				i--;
				continue;
			}
			char temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return String.valueOf(arr);
	}

	public static void main(String args[]) {
		System.out.println(reverseString(" this is not that simple "));
		System.out.println(isCyclic("shobhit", "hitshobh"));
	}

}
