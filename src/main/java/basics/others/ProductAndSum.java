package basics.others;

public class ProductAndSum {

	public static int subtractProductAndSum(int n) {
		String num = "" + n;
		int product = 1, sum = 0;
		for (char ch : num.toCharArray()) {
			product *= Character.getNumericValue(ch);
			sum += Character.getNumericValue(ch);
		}
		return product - sum;
	}

	public static void main(String[] args) {
		System.out.println(subtractProductAndSum(27318));
	}

}
