package basics.array;

import java.util.Arrays;
import java.util.HashMap;

public class TwoSum {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};
        System.out.println(Arrays.toString(addSum(arr, 4)));
    }

    public static int[] addSum(int[] arr, int target) {
        int[] output = new int[2];
        HashMap<Integer, Integer> mapp = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            mapp.put(arr[i], i);
        }

        for (int i = 0; i < arr.length; i++) {
            int remainder = target - arr[i];
            if (mapp.containsKey(remainder)) {
                output[0] = i;
                output[1] = mapp.get(remainder);
                break;
            }
        }
        return output;
    }
}
