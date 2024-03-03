package basics.solutions;

public class DefangIP {

	public static void main(String[] args) {
		String str = "1.1.1.1";
		String abc = str.replaceAll("\\.", "[.]");
		System.out.println(abc);
	}

}
