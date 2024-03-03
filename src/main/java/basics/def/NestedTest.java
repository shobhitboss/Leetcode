package basics.def;

public class NestedTest {

	private int x = 10;
	private static int y = 20;

	private class NonStatic {
		void display() {
			System.out.println("private int x = " + x);
		}
	}

	static class StaticNested {
		void display() {
			// You can't access non-static members here
			// System.out.println("private int x = " + x);

			// You can only access the static members
			System.out.println("private static int = " + y);
		}
	}

	public static void main(String[] args) {
		NestedTest nc = new NestedTest();
		// instantiation of inner non-static class
		NonStatic nonStatic = nc.new NonStatic();
		nonStatic.display();

		// You can directly instantiate nested static class
		StaticNested staticNested = new StaticNested();
		staticNested.display();
	}
	
}