/*
1. if you win a round, the bet amount will be added to your sum and next bet amount will be $1;
2. if you lose a round, the bet amount will be reduced from your total sum and next bet will be twice the previous.
3. game ends when all the rounds are complete or you dont have sufficient sum.
*/

package basics.solutions;

public class BettingGame {
	public static void main(String[] args) {
		String res = "WLWWL";
		int sum = 0;
		int currbet = 1;

		for (char ch : res.toCharArray()) {
			if (ch == 'W') {
				sum += currbet;
			} else if (ch == 'L') {
				sum -= currbet;
				currbet *= 2;
			}
			if (sum <= 0) {
				System.out.println("Don't have sufficient amount to play");
				break;
			}
		}
		System.out.println("Total Amount : " + sum);
	}
}
