package basics.others;

//Method to get max number of times we can perform square root in a range  
public class PerfectSquaresNum {

	public static void main(String[] args) {
		int A = 100000;
		int B = 700000;
		int res = 0;
		while (A <= B) {
			A = nextPerfectSquare(A);
			B = prePerfectSquare(B);
			System.out.println("A : " + A + " B : " + B);
			res++;
		}
		System.out.println(res);
	}

	static int nextPerfectSquare(int N) {
		int nextN = (int) Math.floor(Math.sqrt(N)) + 1;
		return nextN;
	}

	static int prePerfectSquare(int N) {
		int nextN = (int) Math.ceil(Math.sqrt(N) - 1);
		return nextN;
	}
}
