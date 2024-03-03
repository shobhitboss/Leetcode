package basics.solutions;

public class Palindrome {

	public static void main(String[] args) {
		String test = "TestseT";
		boolean flag = false;
		for (int i = 0, j = test.length() - 1; i < j; i++, j--) {
			if (test.charAt(i) == test.charAt(j))
				flag = true;
			else {
				flag = false;
				break;
			}
		}
		if (flag == true)
			System.out.println("String is Palindrome");
		else
			System.out.println("String is not palindrome");
	}

}
