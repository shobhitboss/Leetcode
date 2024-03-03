package org.example;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

public class Temp {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 2, 4, 5, 3, 5, 6, 4, 5, 6, 7, 4, 3, 3, 6, 6, 3, 5, 6, 3, 4, 4, 4, 3, 2, 5, 6, 4, 5};
        freqSort(arr);
    }

    public static void freqSort(int[] array) {
        Map<Integer, Integer> frequencymap = new HashMap<>();
        Integer[] intArr;
        for (int num : array) {
            frequencymap.put(num, frequencymap.getOrDefault(num, 0) + 1);
        }

        Arrays.sort(intArr = Arrays.stream(array).boxed().toArray(Integer[]::new), (a, b) -> frequencymap.get(b) == frequencymap.get(a) ? a - b : frequencymap.get(b) - frequencymap.get(a));
        System.out.println("Input Array : " + Arrays.toString(array) + "\n Sorted Array : " + Arrays.toString(intArr));
    }
}
