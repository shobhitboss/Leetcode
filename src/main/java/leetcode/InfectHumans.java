package leetcode;

public class InfectHumans {

    public static void main(String[] args) {
        int[][] arr = {{0, 1, 1, 0, 1}, {0, 1, 0, 1, 0}, {0, 0, 0, 0, 1}, {0, 1, 0, 0, 0}};
        InfectHumans cls = new InfectHumans();
        System.out.println(cls.minHours(arr));
    }


    public void reverseTree() {

    }
    public int minHours(int[][] arr) {
        int r = arr.length;
        int c = arr[0].length;
        int a = 2;
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                if (arr[i][j] == 1)
                    infect(arr, i, j, a);
            }
        }

        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                if (arr[i][j] == 0)
                    return 0;
                a = Math.max(a, arr[i][j]);
            }
        }
        return a - 1;
    }

    public void infect(int[][] arr, int r, int c, int t) {
        if (r < 0 || r >= arr.length || c < 0 || c >= arr[0].length || arr[r][c] > 0 || (arr[r][c] > 0 && arr[r][c] < t))
            return;
        arr[r][c] = t;
        infect(arr, r + 1, c, t + 1);
        infect(arr, r - 1, c, t + 1);
        infect(arr, r, c + 1, t + 1);
        infect(arr, r, c + 1, t + 1);
    }
}
