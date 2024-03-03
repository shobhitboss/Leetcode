package org.example;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Denomination {

    public static void main(String[] args) {
        int num = 63;
        List<Integer> dems = Arrays.asList(5, 10, 50, 2, 1);
        Collections.sort(dems, Collections.reverseOrder());
        getDenomination(dems, num);
    }

    public static void getDenomination(List<Integer> dems, int number) {
        for (int coin : dems) {
            int count = 0;
            if (number >= coin) {
                count = number / coin;
                number = number - (count * coin);
            }
            System.out.println("Coin : " + coin + " : " + count);
        }
    }
}
