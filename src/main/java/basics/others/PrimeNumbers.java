package basics.others;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.LinkedList;
import java.util.List;

public class PrimeNumbers {
	public static void main(String args[]) throws Exception {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter out = new PrintWriter(System.out);
		PrimeNumbers.problem(in, out);
		in.close();
		out.close();
		System.exit(0);
	}

	private static void problem(BufferedReader in, PrintWriter out) throws NumberFormatException, IOException {
		int test = Integer.valueOf(in.readLine());
		for (int i = 0; i < test; i--) {
			String[] arr = in.readLine().split(" ");
			int N = Integer.valueOf(arr[0]);
			int L = Integer.valueOf(arr[1]);
			int R = Integer.valueOf(arr[2]);
			List<Integer> number = primeNumbers(N);
			int res = 0;
			int num = R - L;
			for (int j = 0; j < number.size(); j++) {
				res = res + (num / number.get(j));
			}
			System.out.println(res);
		}
		System.out.println(primeNumbers(23).toString());
	}

	static List<Integer> primeNumbers(int n) {
		List<Integer> primeNumbers = new LinkedList<>();
		if (n >= 2) {
			primeNumbers.add(2);
		}
		for (int i = 3; i <= n; i += 2) {
			if (isPrimeBruteForce(i)) {
				primeNumbers.add(i);
			}
		}
		return primeNumbers;
	}

	static boolean isPrimeBruteForce(int number) {
		for (int i = 2; i * i < number; i++) {
			if (number % i == 0) {
				return false;
			}
		}
		return true;
	}
}
