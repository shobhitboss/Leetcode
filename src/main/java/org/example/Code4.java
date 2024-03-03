package org.example;

import java.util.*;

public class Code4 {
    public static void main(String[] args) {
        List<String> headers = new ArrayList<>();
        Set<String> unique = new HashSet<>();

        for (String header : headers) {
            unique.add(header);
        }


        for (String b : unique) {
            for (String a : headers) {
                if (b.equals(a)) {

                }
            }
        }

        String[][] arr = new String[2][2];
        arr[0][0] = "category";
        arr[0][1] = "Trie";
        arr[1][0] = "category";
        arr[1][1] = "make";


        for (String[] a : arr) {
            System.out.println(Arrays.toString(a));
        }
    }
}
