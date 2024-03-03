package basics.others;

public class WaterBottles {

	public static int numWaterBottles(int numBottles, int numExchange) {
		int sum = numBottles, change = 0, empty = 0;
		while (numBottles >= numExchange) {
			change = numBottles / numExchange;
			empty = numBottles % numExchange;
			sum += change;
			numBottles = change + empty;
		}
		return sum;
	}

	public static void main(String args[]) {
		System.out.println(numWaterBottles(15, 4));
	}
}
