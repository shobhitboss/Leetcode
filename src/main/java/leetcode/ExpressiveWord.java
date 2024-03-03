//809. Expressive Words

package leetcode;

public class ExpressiveWord {

    public static void main(String[] args) {
        String str = "zzzzzyyyyy";
        String[] words = {"zzyy", "zy", "zyy"};

//        String str = "aaa";
//        String[] words = {"aaaa"};
        System.out.println(expressiveWords(str, words));
    }

    public static int expressiveWords(String s, String[] words) {
        int res = 0;
        for (String word : words) {
            if (isExpressive(s, word))
                res++;
        }
        return res;
    }

    public static boolean isExpressive(String s, String word) {
        int i = 0, j = 0;
        if (s.charAt(i) != word.charAt(j) || s.charAt(s.length() - 1) != word.charAt(word.length() - 1) || word.length() > s.length())
            return false;
        while (i < s.length() && j < word.length()) {
            char ch = s.charAt(i);
            int scount = 0;
            while (i < s.length() && s.charAt(i) == ch) {
                i++;
                scount++;
            }
            int wordCount = 0;
            while (j < word.length() && word.charAt(j) == ch) {
                j++;
                wordCount++;
            }
            if (wordCount > scount || (scount > wordCount && scount < 3))
                return false;
        }

        return i == s.length() && j == word.length();
    }
}
