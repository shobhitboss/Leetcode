//509. Fibonacci Number
package basics.others;

public class FibonnaciNumber {

	public static int fib(int N) {
		if (N <= 1)
			return N;
		return fib(N - 2) + fib(N - 1);
	}

	public static void main(String[] args) {
		System.out.println(fib(2));
	}

}
