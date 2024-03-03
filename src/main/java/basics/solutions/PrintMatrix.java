package basics.solutions;

import java.util.Arrays;

public class PrintMatrix {
    public static void main(String[] args) {
        int[][] mat = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}, {13, 14, 15, 16}};
        printMatrix(mat);
    }

    public static void printMatrix(int[][] matrix) {
        for (int[] arr : matrix)
            System.out.println(Arrays.toString(arr));
    }
}
