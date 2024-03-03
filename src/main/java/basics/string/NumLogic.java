package basics.string;

public class NumLogic {

	public static void main(String[] args) {

		m1(null); // compile time error
		m2(2); // int
		m2(2.0); // double
		m2(2.0f); // object
		m2(2L); // object

	}

	private void m1(Object o) {
		System.out.println("------- in object");

	}

	private static void m1(String s) {
		System.out.println("------- in string");

	}

	private static void m2(int x) {
		System.out.println("--- int");
	}

	private static void m2(double x) {
		System.out.println("--- double");
	}
}
