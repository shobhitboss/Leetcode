package Apple;

import java.util.Arrays;
import java.util.Collections;
import java.util.PriorityQueue;

public class MaxWindowElement {
    public static void main(String[] args) {
        int[] arr = {4, 1, 3, 5, 1, 2, 3, 2, 1, 1, 5};
        maxWindowElement(arr, 4);
    }

    public static void maxWindowElement(int[] arr, int k) {
        int size = arr.length - k + 1, j = 0;
        int[] result = new int[size];
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

        for (int i = 0; i < arr.length; i++) {
            pq.add(arr[i]);
            if (i < k - 1)
                continue;
            result[j++] = pq.peek();
            pq.remove(arr[i - k + 1]);
        }
        System.out.println(Arrays.toString(result));
    }
}
