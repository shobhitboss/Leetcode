package basics.array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

public class SingleNumber {

	public static int singleNumber(int[] nums) {
		int num = nums[0];
		for (int i = 1; i < nums.length; i++) {
			num = num ^ nums[i];
		}
		return num;
	}

	public boolean containsDuplicate(int[] nums) {
		HashSet<Integer> set = new HashSet<>();
		for (int i : nums) {
			if (set.contains(i)) {
				return true;
			} else {
				set.add(i);
			}
		}
		return false;
	}

	public static int twoCitySchedCost(int[][] costs) {
		int cost = 0;
		int i = 0;
		while (i < costs.length - 1) {
			cost += costs[i][0] < costs[i][1] ? costs[i][0] : costs[i][1];
			System.out.println(cost);
			i++;
		}
		return cost;
	}
	
	public static int findLucky(int[] arr) {
		int max = -1;
	       HashMap<Integer, Integer> map = new HashMap<>();
	        for(int i : arr){
             if(map.containsKey(i)){
                 int temp = map.get(i) + 1;
                 map.put(i, temp);
                 if(i == map.get(i)){
                     max = max < i ? i : max;
                 }
             } else
            	 map.put(i, 1);
             
         }
	        return max;
    }
	public List<Integer> findDisappearedNumbers(int[] nums) {
        int n = nums.length;
        List<Integer> list = new ArrayList<>();
        HashSet<Integer> set = new HashSet<>();
        for(int i : nums)
            set.add(i);
        for(int i=1; i < n; i++){
            if(!set.contains(i))
                list.add(i);
        }
        return list;
    }

	public static void main(String[] args) {
		int[] arr = { 2, 3, 4, 9, 8, 9, 8, 4, 3 };
		int[] arr2 = { 1, 2, 2, 4 };
//		System.out.println(singleNumber(arr));
//		System.out.println(singleNumber(arr2));
		
		System.out.println(findLucky(arr2));

		int[][] arr3 = { { 259, 770 }, { 448, 54 }, { 926, 667 }, { 184, 139 }, { 840, 118 }, { 577, 469 } };
//		System.out.println(twoCitySchedCost(arr3));
	}
}
