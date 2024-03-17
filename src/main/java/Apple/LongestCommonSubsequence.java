package Apple;

public class LongestCommonSubsequence {
    public static int longestCommonSubsequence(String str1, String str2, int i, int j, int[][] dp) {
        if (i == str1.length()) return 0;
        if (j == str2.length()) return 0;
        if (dp[i][j] != 0) return dp[i][j];
        int ans = 0;
        if (str1.charAt(i) == str2.charAt(j)) {
            ans = 1 + longestCommonSubsequence(str1, str2, i + 1, j + 1, dp);
        } else
            ans = Math.max(longestCommonSubsequence(str1, str2, i + 1, j, dp), longestCommonSubsequence(str1, str2, i, j + 1, dp));
        return dp[i][j] = ans;
    }

    public static void main(String[] args) {
        String str1 = "Shobhittiwari";
        String str2 = "mohitrajatrey";
        int[][] dp = new int[str1.length()][str2.length()];
        System.out.println(longestCommonSubsequence(str1, str2, 0, 0, dp));
    }
}
