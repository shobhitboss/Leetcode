package basics.simple;

public class TestBasic {

	public static void main(String[] args) {
		int line = 30;
		int temp = line;
		for (int i = 1; i <= line; i++) {
			for (int j = temp - 1; j >= 0; j--) {
				System.out.print(' ');
			}
			for (int j = 1; j < (2 * i); j++) {
				System.out.print('*');
			}
			System.out.println();
			temp--;
		}
	}
}
