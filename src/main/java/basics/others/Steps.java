package basics.others;

public class Steps {

	public static int numberOfSteps(int num) {
		int steps = 0;
		while (num != 0) {
			if (num % 2 == 0) {
				steps++;
				num /= 2;
			} else {
				steps++;
				num = num - 1;
			}
		}
		return steps;
	}

	public static int powerOfTwo(int num) {
		int n = 1, count = 0;
		while (n < num) {
			count++;
			n *= 2;
		}
		return count + 1;
	}

	public static void main(String[] args) {
		System.out.println(numberOfSteps(123));
		System.out.println(powerOfTwo(128));
	}

}
