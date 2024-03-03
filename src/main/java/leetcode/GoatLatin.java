//824. Goat Latin
package leetcode;

public class GoatLatin {

    public static String toGoatLatin(String S) {
        StringBuilder sb = new StringBuilder();
        StringBuilder add = new StringBuilder();
        for (String str : S.split(" ")) {
            add.append('a');
            sb.append(convertString(str) + add + " ");
        }
        return sb.toString().trim();
    }

    private static String convertString(String str) {
        StringBuilder sb = new StringBuilder();
        if (isFirstCharVowel(str.charAt(0)))
            return sb.append(str + "ma").toString();
        else
            return sb.append(str.substring(1) + str.charAt(0) + "ma").toString();
    }

    private static boolean isFirstCharVowel(char ch) {
        String str = "aeiou";
        return str.indexOf(Character.toLowerCase(ch)) != -1;

    }

    public static void main(String[] args) {
        System.out.println(toGoatLatin("I speak Goat Latin"));
    }

}
