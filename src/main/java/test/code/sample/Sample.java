package test.code.sample;

import java.util.Arrays;

public class Sample {
    public static void main(String[] args) {
        String str = "test mohit tiwari";
//        String out = "iraw& ittih omtset";
//        System.out.println(reverseString(str));
        System.out.println(str);
        System.out.println(reverseString2(str));
    }


    public static String reverseString(String str) {
        char[] arr = str.toCharArray();
        for (int i = 0, j = str.length() - 1; i < j; i++, j--) {
            if (!Character.isLetter(arr[i]) || arr[i] == ' ') {
                j++;
                continue;
            }
            if (!Character.isLetter(arr[j]) || arr[j] == ' ') {
                i--;
                continue;
            }
            char temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return String.valueOf(arr);
    }

    public static String reverseString2(String str) {
        String[] arr = str.split("\\s");
        StringBuilder sb = new StringBuilder();
        for (String a : arr) {
            sb.append(reverseString(a + " "));
        }
        return sb.toString().trim();
    }


}
