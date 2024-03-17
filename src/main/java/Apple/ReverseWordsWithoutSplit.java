package Apple;

public class ReverseWordsWithoutSplit {
    public static void main(String[] args) {
        String str = "this is string to test reverse without split";
        System.out.println(reverseWordsWithoutSplit(str));
    }

    public static String reverseWordsWithoutSplit(String str) {
        if (str.length() == 0 || str.length() == 1)
            return str;
        str = reverseString(str);
        StringBuilder sb = new StringBuilder();
        int left = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == ' ') {
                sb.append(reverseString(str.substring(left, i)) + " ");
                left = i + 1;
            }
        }
        sb.append(reverseString(str.substring(left)));
        return sb.toString();
    }

    public static String reverseString(String str) {
        char[] arr = str.toCharArray();
        int i = 0, j = str.length() - 1;
        while (i < j) {
            char temp = arr[i];
            arr[i++] = arr[j];
            arr[j--] = temp;
        }
        return String.valueOf(arr);
    }
}
