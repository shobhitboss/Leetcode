package Apple;

import java.util.ArrayList;
import java.util.List;

public class AllPalindromeSubstring {
    public static void main(String[] args) {
        String input = "aabbaa";
//        System.out.println(findAllPalindromeSubString(input));
        System.out.println(isPalindrome(input));
    }

    public static List<String> findAllPalindromeSubString(String str) {
        List<String> palindromeSubstringList = new ArrayList<>();

        return palindromeSubstringList;
    }

    public static boolean isPalindrome(String str) {
        int i = 0, j = str.length() - 1;
        while (i < j) {
            if (str.charAt(i) != str.charAt(j))
                return false;
            i++;
            j--;
        }
        return true;
    }
}

