package Apple;

import java.util.Arrays;

public class LongestIncreasingSubsequence {
    public static void main(String[] args) {
        int[] arr = {1, 3, 9, 6, 7, 8, 6, 7, 8, 9, 8};
        System.out.println(longestIncreasingSubsequence(arr, 0, -1));

        int[][] dp = new int[arr.length][arr.length];
        System.out.println(longestIncreasingSubsequenceDP(arr, 0, -1, dp));

    }

    public static int longestIncreasingSubsequence(int[] arr, int curr, int prev) {
        if (curr == arr.length)
            return 0;

        int take = 0;
        if (prev == -1 || arr[curr] > arr[prev])
            take = 1 + longestIncreasingSubsequence(arr, curr + 1, curr);

        int notTake = longestIncreasingSubsequence(arr, curr + 1, prev);

        return Math.max(take, notTake);
    }

    public static int longestIncreasingSubsequenceDP(int[] arr, int curr, int prev, int[][] dp) {
        if (curr == arr.length)
            return 0;
        if (dp[curr][prev + 1] != 0)
            return dp[curr][prev + 1];
        int take = 0;
        if (prev == -1 || arr[curr] > arr[prev + 1])
            take = 1 + longestIncreasingSubsequenceDP(arr, curr + 1, curr, dp);

        int notTake = longestIncreasingSubsequenceDP(arr, curr + 1, prev, dp);

        return dp[curr][prev + 1] = Math.max(take, notTake);
    }
}
