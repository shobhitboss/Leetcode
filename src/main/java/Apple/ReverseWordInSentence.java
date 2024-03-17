package Apple;

public class ReverseWordInSentence {
    public static void main(String[] args) {
        String str = "given some random string to reverse word";
        System.out.println(reverseWordInString(str));
    }

    public static String reverseWordInString(String str) {
        StringBuilder sb = new StringBuilder();
        String[] strArr = str.split("\\ ");
        for (String s : strArr) {
            sb.append(reverseWord(s) + " ");
        }
        String output = sb.toString().trim();
        return output;
    }

    public static String reverseWord(String str) {
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
