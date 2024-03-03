//Input: s = "abcdefg", k = 2
//Output: "bacdfeg"

package stringproblems;

public class ReverseString2 {

	static char[] arr;

	public static String reverseStr(String s, int k) {
		arr = s.toCharArray();
		int i = 0;
		boolean flag = true;
		while (i + k - 1 < s.length()) {
			if (flag) {
				reverse(i, i + k - 1);
				i += k;
				flag = false;
			} else {
				i += k;
				flag = true;
			}
		}
		return String.valueOf(arr);
	}

	public static void reverse(int x, int y) {
		while (x < y) {
			char temp = arr[x];
			arr[x++] = arr[y];
			arr[y--] = temp;
		}
	}

	public static void main(String[] args) {
		System.out.println(reverseStr("abcdefg", 2));

	}

}
