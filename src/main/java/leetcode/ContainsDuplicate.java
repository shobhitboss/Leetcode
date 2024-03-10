//219. Contains Duplicate II

package leetcode;

import java.util.HashMap;
import java.util.Map;

public class ContainsDuplicate {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 1};
        int k = 3;
        ContainsDuplicate cd = new ContainsDuplicate();
        System.out.println(cd.containsNearbyDuplicate(nums, k));
    }

    public boolean containsNearbyDuplicate(int[] nums, int k) {
        boolean res = false;
        Map<Integer, Integer> mapp = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (mapp.containsKey(nums[i])) {
                if (Math.abs(mapp.get(nums[i]) - i) <= k) {
                    res = true;
                }
            }
            mapp.put(nums[i], i);
        }
        return res;
    }
}
