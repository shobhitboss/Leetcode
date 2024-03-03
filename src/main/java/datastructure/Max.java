package datastructure;

public class Max {

	public static int getMaxSum(int A_i[], int n) {
		int dp[][] = new int[n][2];
		dp[0][0] = A_i[0];
		dp[0][1] = A_i[0] * A_i[0];

		int max_sum = Math.max(dp[0][0], dp[0][1]);
		for (int i = 1; i < n; i++) {
			dp[i][0] = Math.max(A_i[i], dp[i - 1][0] + A_i[i]);
			dp[i][1] = Math.max(Math.max(dp[i - 1][1] + A_i[i], A_i[i] * A_i[i]), dp[i - 1][0] + A_i[i] * A_i[i]);
			max_sum = Math.max(Math.max(max_sum, dp[i][1]), dp[i][0]);
		}
		return max_sum;
	}

	public static void main(String[] args) {
		int[] arr = { 3, -4, 2565 };
		System.out.println(getMaxSum(arr, 3));
	}
}
