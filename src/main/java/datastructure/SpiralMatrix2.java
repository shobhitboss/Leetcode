package datastructure;

import java.util.Arrays;

public class SpiralMatrix2 {

	public static int[][] generateMatrix(int n) {
		int[][] matrix = new int[n][n];
		int top = 0;
		int bottom = matrix.length - 1;
		int left = 0;
		int right = matrix[0].length - 1;
		int size = matrix.length * matrix[0].length;
		int num = 1;

		while (num <= size) {
			for (int i = left; i <= right && num <= size; i++) {
				matrix[top][i] = num++;
			}
			top++;
			for (int i = top; i <= bottom && num <= size; i++) {
				matrix[i][right] = num++;
			}
			right--;
			for (int i = right; i >= left && num <= size; i--) {
				matrix[bottom][i] = num++;
			}
			bottom--;
			for (int i = bottom; i >= top && num <= size; i--) {
				matrix[i][left] = num++;
			}
			left++;
		}
		return matrix;
	}

	public static void main(String[] args) {
		System.out.println(Arrays.deepToString(generateMatrix(3)));
	}

}
