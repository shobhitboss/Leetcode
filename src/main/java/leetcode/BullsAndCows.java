package leetcode;

import com.google.common.collect.Ordering;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BullsAndCows {

    public static void main(String[] args) {
        String secret = "11", guess = "10";
//        getHint(secret, guess);


        List<Integer> li = new ArrayList<>();
        li.addAll(Arrays.asList(0,1, 2, 3, 4, 5, 6, 7, 8));

        boolean flag = Ordering.natural().isOrdered(li);
        System.out.println(flag);

    }

    public static String getHint(String secret, String guess) {
        int bulls = 0, cows = 0;
        char[] arr = guess.toCharArray();
        for (int i = 0; i < guess.length(); i++) {
            char gchar = guess.charAt(i), schar = secret.charAt(i);
            if (gchar == schar) {
                bulls++;
                arr[i] = 'Z';
            }
        }
        for (int i = 0; i < arr.length; i++) {
            char gchar = guess.charAt(i);
            if (String.valueOf(arr).indexOf(gchar) != -1) {
                arr[String.valueOf(arr).indexOf(gchar)] = 'Z';
                cows++;
            }
        }
        String out = bulls + "A" + cows + "B";
        System.out.println(out);
        return out;
    }
}
