package basics.others;

import java.util.ArrayList;
import java.util.List;

public class Fizzbuzz {

	public static List<String> fizzBuzz(int n) {
		List<String> list = new ArrayList<>();
		for (int i = 1; i <= n; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				list.add("FizzBuzz");
				continue;
			} else if (i % 3 == 0) {
				list.add("Fizz");
				continue;
			} else if (i % 5 == 0) {
				list.add("Buzz");
				continue;
			} else
				list.add(String.valueOf(i));
		}
		System.out.println(list);
		return list;
	}

	public static void main(String[] args) {
		fizzBuzz(15);
	}

}
