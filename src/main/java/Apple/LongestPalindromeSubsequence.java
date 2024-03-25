package Apple;

public class LongestPalindromeSubsequence {

    public static void main(String[] args) {
        String str = "bbbab";
        StringBuilder sb = new StringBuilder(str);
        String strRev = sb.reverse().toString();
        int[][] dp = new int[str.length() + 1][strRev.length() + 1];
        int ans = longestCommonSubsequenceRecursively(str, strRev, 0, 0, dp);
        System.out.println("Characters required to make String palindrome - " + (str.length() - ans));
    }

    public static int longestCommonSubsequenceRecursively(String str1, String str2, int i, int j, int[][] dp) {
        if (i == str1.length()) return 0;
        if (j == str2.length()) return 0;
        if (dp[i][j] != 0) return dp[i][j];
        int ans = 0;
        if (str1.charAt(i) == str2.charAt(j)) {
            ans = 1 + longestCommonSubsequenceRecursively(str1, str2, i + 1, j + 1, dp);
        } else
            ans = Math.max(longestCommonSubsequenceRecursively(str1, str2, i + 1, j, dp), longestCommonSubsequenceRecursively(str1, str2, i, j + 1, dp));
        return dp[i][j] = ans;
    }

    public static int longestCommonSubsequenceTabulation(String str1, String str2, int m, int n, int[][] dp) {
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }
}
