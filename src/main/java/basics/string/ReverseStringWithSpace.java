package basics.string;

import java.util.Arrays;
import java.util.Collections;

public class ReverseStringWithSpace {
    public static void main(String[] args) {
        double[] coins = {5, 2, 1, 0.50, 0.25, 0.10, 0.01};
        double number = 22.43;
        getDenominations(coins, number);

    }

    public static void getDenominations(double[] coins, double number) {
        Arrays.sort(coins);
        System.out.println(Arrays.toString(coins));
        for (int i = coins.length - 1; i >= 0; i--) {
            double coin = coins[i];
            if (number >= coin) {
                int n = (int) (number / coin);
                number -= (n * coin);
                System.out.println("coin : " + coin + " n : " + n);
            }
        }
    }
}
