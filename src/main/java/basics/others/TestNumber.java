package basics.others;

import java.util.Arrays;
import java.util.Scanner;

public class TestNumber {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String number1 = sc.nextLine();
		String number2 = String.valueOf(Integer.valueOf(number1) * 2);
		System.out.println("number1 : " + number1 + "\n" + "number2 : " + number2);
		char[] arr1 = number1.toCharArray();
		char[] arr2 = number2.toCharArray();
		Arrays.sort(arr1);
		Arrays.sort(arr2);
		System.out.println(String.valueOf(arr1) + " and " + String.valueOf(arr2));
		System.out.println(String.valueOf(arr2).compareTo(String.valueOf(arr1)));
		sc.close();
	}

}
