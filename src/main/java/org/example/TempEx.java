package org.example;

import java.util.HashMap;
import java.util.Map;

public class TempEx {
    public static void main(String[] args) {
        String str = "thisissampletest";
        Map<Character, Integer> count = new HashMap<>();
        for (char ch : str.toCharArray())
            count.put(ch, count.computeIfAbsent(ch, k -> 0) + 1);
        System.out.println(count);
    }
}
