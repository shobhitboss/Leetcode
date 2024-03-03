package org.example;

import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.Queue;

public class CheckPQ {

    public static void main(String[] args) {
        int[][] arr = {{10, 60}, {20, 30}, {30, 30}, {60, 40}};
        Queue<int[]> pq = new PriorityQueue<>((a, b) -> b[1] - a[1]);

        for (int[] a : arr)
            pq.add(a);

        pq.forEach(a -> System.out.println(Arrays.toString(a)));
    }
}
