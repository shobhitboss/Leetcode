package org.example;

import java.util.Arrays;

public class Code5 {
    public static void main(String[] args) {
        String word = "this is string to test";
        countCharacter(word);
    }

    public static int countCharacter(String word) {
        int[] arr = new int[26];
        for (char ch : word.toCharArray()) {
            if (ch >= 'a' && ch <= 'z')
                arr[ch - 'a']++;
        }

        for (int i : arr) {
            if (i != 0)
                System.out.println();
        }

        System.out.println(Arrays.toString(arr));
        return 0;
    }
}
