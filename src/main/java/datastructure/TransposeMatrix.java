package datastructure;

import java.util.Arrays;

public class TransposeMatrix {

    public static int[][] transpose(int[][] A) {
        int m = A.length, n = A[0].length;
        int[][] transpose = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                transpose[i][j] = A[j][i];
            }
        }
        return transpose;
    }

    public static int[][] rotate90Degree(int[][] A) {
        int n = A.length;
        for (int i = 0; i < n; i++) {
            int l = 0;
            int m = n - 1;
            while (l < m) {
                int temp = A[i][l];
                A[i][l++] = A[i][m];
                A[i][m--] = temp;
            }
        }
        return A;
    }

    public static void main(String[] args) {
        int[][] arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println(Arrays.deepToString(arr));
        System.out.println(Arrays.deepToString(transpose(arr)));
        System.out.println(Arrays.deepToString(rotate90Degree(transpose(arr))));
    }

}
