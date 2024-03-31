package Apple;

public class CharsToMakeStringPalindrome {
    public static void main(String[] args) {
        String str = "thisispa";
        String str2 = new StringBuilder(str).reverse().toString();
        int[][] dp = new int[str.length()][str.length()];
        int ans = longestCommonSubsequence(str, str2, 0, 0, dp);
        int out = str.length() - ans;
        System.out.println(out);
    }


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

}
