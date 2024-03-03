//1688. Count of Matches in Tournament
package basics.simple;

public class TournamentMatches {
	public static int numberOfMatches(int n) {
		int count = 0;
		while (n != 1) {
			if (n % 2 == 0) {
				count += n / 2;
			} else {
				count += (n - 1) / 2;
				count++;
			}
			n /= 2;
		}
		return count;
	}

	public static void main(String[] args) {
		System.out.println(numberOfMatches(21));
	}

}
