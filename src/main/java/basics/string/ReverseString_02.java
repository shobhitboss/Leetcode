package basics.string;

public class ReverseString_02 {

	public static void main(String[] args) {
		String str = "This is a string";
		StringBuilder res = new StringBuilder();
		String[] arr = str.split("\\ ");
		for (int i = 0; i < arr.length; i++)
			res.append(reverseStr(arr[i]) + " ");
		System.out.println(res.toString().trim());
	}

	public static String reverseStr(String str) {
		StringBuilder sb = new StringBuilder();
		return sb.append(str).reverse().toString();
	}
}
