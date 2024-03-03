package org.example;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Code2 {
    public static void main(String[] args) {
        int[] arr = {1, 23, 71, 9, 4, 5, 654, 4, 243, 4, 32, 2, 2};
        getMaxNumber(arr);
    }

    public static void getMaxNumber(int[] arr) {
        List<Integer> numbers = new ArrayList<>();
        StringBuilder output = new StringBuilder();
        Arrays.stream(arr).forEach(i -> numbers.add(i));

        Collections.sort(numbers, (a, b) -> (String.valueOf(b) + a).compareTo(String.valueOf(a) + b));
        System.out.println(numbers);
        numbers.forEach(a -> output.append(a));
        System.out.println(output);
    }
}
