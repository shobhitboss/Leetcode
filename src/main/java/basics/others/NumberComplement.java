package basics.others;

public class NumberComplement {

	public static int findComplement(int num) {
		StringBuilder sb = new StringBuilder();
		while (num > 0) {
			if (num % 2 == 0)
				sb.append(1);
			else
				sb.append(0);
			num >>= 1;
		}
		sb = sb.reverse();
		return Integer.parseInt(sb.toString(), 2);
	}

	public static int findComplement2(int num) {
		int n = num;
		int bits = 0; // count length of number in binary representation
		while (n > 0) {
			n = n >> 1;
			bits++;
		}
		System.out.println(bits + " " + (1 << bits));
		return (1 << bits) + ~num;
	}

	public static void main(String[] args) {
		System.out.println(findComplement(5));
		System.out.println(findComplement2(5));
	}

}
