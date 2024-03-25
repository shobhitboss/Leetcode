package stringproblems;

import java.util.HashMap;
import java.util.Map;

public class Temp {
    public static void main(String[] args) {

    }

    public static int lengthOfLongestSubstring(String s) {
        int ans = 0, max = 0;
        int[] arr = new int[256];
        for (char ch : s.toCharArray()) {
            if (arr[ch] > 0) {
                if (max < ans)
                    max = ans;
                arr = new int[256];
                ans = 0;
            } else {
                arr[ch]++;
                ans++;
            }
        }
        return max;
    }
}
