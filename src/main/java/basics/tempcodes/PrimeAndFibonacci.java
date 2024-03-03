package basics.tempcodes;

import java.util.Scanner;

public class PrimeAndFibonacci {

	public static boolean isPrime(int x) {
		if (x < 2)
			return false;
		int l = (int) Math.sqrt(x);
		for (int i = 2; i <= l; i++) {
			if (x % i == 0)
				return false;
		}
		return true;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int count = sc.nextInt();

		int a = 0, b = 1, c = 0;

		while (count > 0) {
			c = a + b;
			a = b;
			b = c;
			if (isPrime(c)) {
				System.out.print(c + " ");
				count--;
			}
		}
		sc.close();
	}

}
