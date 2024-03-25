//350. Intersection of Two Arrays II
package leetcode.Array;

import java.util.Arrays;

public class ArrayIntersection {
    public static void main(String[] args) {
        int[] nums1 = {1, 2, 2, 1}, nums2 = {2, 2};
        System.out.println(Arrays.toString(intersect(nums1, nums2)));
    }

    public static int[] intersect(int[] nums1, int[] nums2) {
        int[] ans = new int[1001], ansCopy = new int[1001];
        int count = 0, j = 0;
        for (int i : nums1) {
            ans[i]++;
            ansCopy[i]++;
        }
        for (int i : nums2) {
            if (ans[i] > 0) {
                count++;
                ans[i]--;
            }
        }
        int[] res = new int[count];
        for (int i : nums2) {
            if (ansCopy[i] > 0) {
                res[j++] = i;
                ansCopy[i]--;
            }
        }
        return res;
    }
}
