//997. Find the Town Judge
package basics.array;

import java.util.Arrays;

public class FindJudge {

	public static int findJudge(int N, int[][] trust) {
		int judge = -1, i = 0;
		boolean[] flag = new boolean[N];
		for (i = 0; i < trust.length; i++)
			flag[trust[i][0] - 1] = true;
		for (i = 0; i < flag.length; i++) {
			if (flag[i] == false) {
				judge = i + 1;
				break;
			}
			if (i == flag.length - 1 & judge == -1)
				return judge;
		}
		Arrays.fill(flag, false);
		for (i = 0; i < trust.length; i++)
			if (trust[i][1] == judge)
				flag[i - 1] = true;
		for (i = 0; i < flag.length; i++)
			if (i + 1 != judge && flag[i] == false)
				return -1;
		return judge;
	}

	public static void main(String[] args) {
		int[][] arr = { { 1, 3 }, { 1, 4 }, { 2, 3 }, { 2, 4 }, { 4, 3 } };
		findJudge(4, arr);
	}

}
