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

    public static void main(String[] args) {
        String str1 = "Shobhittiwari";
        String str2 = "mohitrajatrey";
        int[][] dp = new int[str1.length()][str2.length()];
        System.out.println(longestCommonSubsequence(str1, str2, 0, 0, dp));

        int[][] dp2 = new int[str1.length() + 1][str2.length() + 1];
        System.out.println(longestCommonSubsequenceTabulation(str1, str2, str1.length(), str2.length(), dp));
    }
}
