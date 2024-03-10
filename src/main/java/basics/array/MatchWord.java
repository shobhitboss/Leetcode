package basics.array;

public class MatchWord {
    public static void main(String[] args) {
        String s = "aeeeeee";
        String t = "v";
        System.out.println(checkAlmostEquivalent(s, t));
    }

    public static boolean checkAlmostEquivalent(String word1, String word2) {
        int[] arr1 = new int[26];
        int[] arr2 = new int[26];

        for (char ch : word1.toCharArray())
            arr1[ch - 'a']++;
        for (char ch : word2.toCharArray())
            arr2[ch - 'a']++;

        for (int i = 0; i < 26; i++) {
            if (arr1[i] > 0 || arr2[i] > 0)
                if (Math.abs(arr1[i] - arr2[i]) > 3)
                    return false;
        }
        return true;
    }
}
