//171. Excel Sheet Column Number
package basics.simple;

public class ColumnNumber {

	public static void main(String[] args) {
		String str = "ABCDEF";
		int count = 0;
		for (int i = 0; i < str.length(); i++) {
			count = count * 26 + (str.charAt(i) - '@');
		}
		System.out.println(count);
	}

}
