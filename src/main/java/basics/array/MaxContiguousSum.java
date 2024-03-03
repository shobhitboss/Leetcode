package basics.array;

import java.math.BigInteger;
import java.util.*;

public class MaxContiguousSum {

    public static int maxSubsequentSum(int[] arr) {
        int maxSoFar = arr[0];
        int currentMax = arr[0];
        for (int i = 1; i < arr.length; i++) {
            maxSoFar = Math.max(arr[i], currentMax + arr[i]);
            currentMax = Math.max(maxSoFar, currentMax);
        }
        return maxSoFar;
    }

    public static void main(String[] args) {

        String temp = "abvlcdrtr";
        int[] arra = new int[126];
        for(char ch : temp.toCharArray()){
            System.out.println(Integer.valueOf(ch));
            arra[ch]++;
        }

        System.out.println(Arrays.toString(arra));

        int[] arr = {-2, -3, 4, -1, -2, 1, 5, -3};
//        System.out.println(maxSubsequentSum(arr));
        String[] sarr = {"cat", "act", "mat", "fat", "car", "tam"};
//        System.out.println(groupAnagrams(sarr));
//        System.out.println(groupAnagram(sarr));
//        System.out.println(addStrings("823749037298384923789", "73489027328970298792"));
    }

    public static List<List<String>> groupAnagrams(String[] strs) {
        HashMap<List<Character>, List<String>> mapp = new HashMap<>();
        for (String str : strs) {
            List<Character> tempList = new ArrayList();
            for (char ch : str.toCharArray())
                tempList.add(ch);
            Collections.sort(tempList);
            mapp.computeIfAbsent(tempList, k -> new ArrayList<String>()).add(str);
        }
        return new ArrayList<>(mapp.values());
    }

    public static List<List<String>> groupAnagram(String[] strs) {
        HashMap<String, List<String>> mapp = new HashMap<>();
        for (String str : strs) {
            char[] tempArray = str.toCharArray();
            Arrays.sort(tempArray);
            mapp.computeIfAbsent(String.valueOf(tempArray), k -> new ArrayList<String>()).add(str);
        }
        return new ArrayList<>(mapp.values());
    }

    public static String addStrings(String num1, String num2) {
        return String.valueOf(new BigInteger(num1).add(new BigInteger(num2)));
    }
}
