package Apple;

import java.util.HashSet;
import java.util.Set;

public class LongestUniqueString {
    public static void main(String[] args) {
        System.out.println(longestUniqueSubstring("tiwari"));
//        bhitabdjtuskfvhslsho
    }

    public static int longestUniqueSubstring(String s) {
        Set<Character> set = new HashSet();
        int max = 0, left = 0;
        for (int right = 0; right < s.length(); right++) {
            while (!set.add(s.charAt(right))) {
                set.remove(s.charAt(left++));
            }
            max = Math.max(max, right - left + 1);
        }
        return max;
    }
}
