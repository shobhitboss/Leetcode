package basics.def;

class test {
	static int i;
	int j;

	// start of static block
	static {
		i = 10;
		System.out.println("static block called ");
	}
	// end of static block
	
	
}

public class Static_Block {
	public static void main(String args[]) {

		// Although we don't have an object of Test, static block is
		// called because i is being accessed in following statement.
		
		System.out.println(test.i);
	}
}
