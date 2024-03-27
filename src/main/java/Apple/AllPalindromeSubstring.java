package Apple;

import java.util.*;

public class AllPalindromeSubstring {
    public static void main(String[] args) {
        String input = "racecar";
        System.out.println(findAllPalindromeSubString(input));

    }

    public static List<String> findAllPalindromeSubString(String str) {
        List<String> palindromeList = new ArrayList<>();
        int n = str.length();
        boolean[][] dp = new boolean[n][n];

        for (int diff = 0; diff < str.length(); diff++) {
            for (int i = 0, j = diff; j < str.length(); i++, j++) {
                if (diff == 0)
                    dp[i][j] = true;
                else if (diff == 1) {
                    if (str.charAt(i) == str.charAt(j))
                        dp[i][j] = true;
                } else {
                    if (str.charAt(i) == str.charAt(j))
                        dp[i][j] = dp[i + 1][j - 1];
                }
                if (dp[i][j]) {
                    palindromeList.add(str.substring(i, j + 1));
                }
            }
        }
        return palindromeList;
    }
}

