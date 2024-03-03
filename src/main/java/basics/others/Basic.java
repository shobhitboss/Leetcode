package basics.others;

public class Basic {

	public static void main(String[] args) {
		StringBuffer sb1 = new StringBuffer("Buffer");
		StringBuffer sb2 = new StringBuffer("Buffer");
		String ss1 = "Buffer";

		System.out.println(sb1 == sb2);
		System.out.println(sb1.equals(sb2));
		System.out.println(sb1.equals(ss1));
		System.out.println(sb1.toString().equals(sb2.toString()));
		System.out.println("poddar".substring(3));

		String str = "fsrlkjl kjwlkjrltjwelk jlkrrjtlkrehjh product id : 493831& time stamp = 54830958405943 this tidhtr  jrtje kejtlerjt lkjr ettt e";
		System.out.println(str.substring(str.indexOf("product id : ") + 13, str.indexOf("& ")));

		for (;;) {
			System.out.println("printing for loop");
			int a = 1;
			if (a == 1)
				System.out.println("a : " + a++);
			else {
				while (a > 5)
					a++;
				break;
			}
			break;
		}

		int bc = 0b101;
		int a = 027;
		int ab = 0x92181;
		System.out.println(a);
		System.out.println(bc);

	}
}
