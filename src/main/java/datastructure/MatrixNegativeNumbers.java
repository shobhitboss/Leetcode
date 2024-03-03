package datastructure;

public class MatrixNegativeNumbers {

    public static int countNegatives(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length, res = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] < 0) {
                    res += n - j;
                    break;
                }
            }
        }
        return res;
    }

    public static void main(String[] args) {
        int[][] arr = {{1, 2, 3}, {4, 5, -1}, {7, -1, -1}};
        System.out.println(countNegatives(arr));
    }

}
