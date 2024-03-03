package datastructure;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Arrays;

public class BinarySearch {

    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);
        BinarySearch.problem(in, out);
        in.close();
        out.close();
        System.exit(0);
    }

    private static void problem(BufferedReader in, PrintWriter out) {
        int[] arr = {2, 3, 4, 56, 7, 8, 33, 3, 3, 45, 556, 5};
        arr = Arrays.stream(arr).distinct().sorted().toArray();
        System.out.println(Arrays.toString(arr));
        System.out.println(Arrays.binarySearch(arr, 33));
        System.out.println("element is present at " + binarySearch(arr, 33));
    }

    private static int binarySearch(int[] arr, int key) {
        return binarySearch(arr, 0, arr.length - 1, key);
    }

    private static int binarySearch(int[] arr, int l, int r, int key) {

        if (r >= l) {
            int mid = l + ((r - l) / 2);
            if (arr[mid] == key)
                return mid;
            if (arr[mid] > key)
                return binarySearch(arr, l, mid - 1, key);
            return binarySearch(arr, mid + 1, r, key);
        }
        return -1;
    }
}
