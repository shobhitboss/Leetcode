package basics.solutions;

import java.util.Scanner;

public class Bin_To_Dec {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String num = sc.nextLine();
		StringBuilder sb = new StringBuilder(num);
		num = sb.reverse().toString();
		int rev = 0;
		int temp = 1;
		for (char ch : num.toCharArray()) {
			rev += ((ch - '0') * temp);
			temp *= 2;
		}
		System.out.println(rev);
		sc.close();
	}

}
