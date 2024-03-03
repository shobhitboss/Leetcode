//766. Toeplitz Matrix
package basics.others;

public class ToeplitzMatrix {

	public static boolean isToeplitzMatrix(int[][] matrix) {
		int m = matrix.length;
		int n = matrix[0].length;
		for (int i = 1; i < m; i++) {
			for (int j = 1; j < n; j++) {
				if (matrix[i][j] != matrix[i - 1][j - 1])
					return false;
			}
		}
		return true;
	}

	public static void main(String[] args) {
		// int[][] matrix = { { 1, 2, 3, 4 }, { 5, 1, 2, 3 }, { 9, 5, 1, 2 } };
		int[][] matrix = { { 1, 2 }, { 2, 2 } };
		System.out.println(isToeplitzMatrix(matrix));
	}

}
