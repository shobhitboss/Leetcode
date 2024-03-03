package basics.others;

import java.util.Dictionary;
import java.util.Hashtable;

public class Factorial {
	public static void main(String[] args) {
		System.out.println(factorial(15));
		Dictionary<String, String> dic = new Hashtable<>();
		dic.put("abc", "value");
		System.out.println(dic.toString());
	}

	private static Long factorial(int i) {
		if (i == 0)
			return 1L;
		else
			return (i * factorial(i - 1));
	}
}
