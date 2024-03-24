package stringproblems;

public class StringReverse {
    public static void main(String[] args) {
        String str = "this is string";
        System.out.println(reverseString(str, str.length() - 1));
    }

    public static String reverseString(String str, int n) {
        if(n == -1)
            return "";
        else
            return
            str.charAt(n) + reverseString(str, n - 1);
    }
}
