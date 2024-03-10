package basics.array;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class MaxNumber {
    public static void main(String[] args) {
        Integer[] arr = {546, 80, 10, 54, 548, 60};
        getMaxNumber(arr);

        printFibonacciSeries(0, 1, 15);
    }

    public static void getMaxNumber(Integer[] arr) {
        StringBuilder maxNum = new StringBuilder();
        Arrays.sort(arr, (a, b) -> (b + "" + a).compareTo(a + "" + b));
        Arrays.stream(arr).forEach(a -> maxNum.append(a));
        System.out.println(Arrays.toString(arr));
        System.out.println(maxNum);
    }

    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Map<Integer, Integer> mapp = new HashMap<>();
        for(int i = 0 ; i < nums.length; i++) {
            if(mapp.containsKey(i)) {

            }
        }
        return false;
    }


    public static void printFibonacciSeries(int a, int b, int n) {
        if (n == 0)
            return;
        System.out.print(b + " ");
        printFibonacciSeries(b, b + a, n - 1);
    }
}