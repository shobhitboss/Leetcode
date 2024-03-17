package Apple;

public class FindTheDifference {
    public static void main(String[] args) {
        String s = "abcd", t = "abcde";
        System.out.println(findTheDifference(s, t));
    }

    public static char findTheDifference(String s, String t) {
        int[] arr = new int[26];
        char ans = 0;
        for (int i : t.toCharArray())
            arr[i - 'a']++;
        for (int i : s.toCharArray())
            arr[i - 'a']--;
        for (int i : t.toCharArray())
            if (arr[i - 'a'] == 1)
                ans = (char) (i);
        return ans;
    }
}
