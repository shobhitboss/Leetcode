//1337. The K Weakest Rows in a Matrix    

package basics.simple;

import java.util.*;
import java.util.Map.Entry;

public class WeakestRows {

	public static int[] kWeakestRows(int[][] mat, int k) {
		int i = 0, count = 0;
		int[] ans = new int[mat.length];
		Map<Integer, List<Integer>> mapp = new TreeMap<>();

		while (i < mat.length) {
			for (int j = 0; j < mat[0].length; j++) {
				if (mat[i][j] == 1)
					count++;
			}
			if (!mapp.containsKey(count)) {
				mapp.put(count, new ArrayList<>());
			}
			mapp.get(count).add(i);
			i++;
			count = 0;
		}

		i = 0;
		for (Entry<Integer, List<Integer>> entry : mapp.entrySet()) {
			for (int j : entry.getValue()) {
				ans[i++] = j;
			}
		}

		System.out.println(Arrays.toString(ans));
		return Arrays.copyOfRange(ans, 0, k);
	}

	public static void main(String[] args) {
		int[][] mat = { { 1, 1, 0, 0, 0 }, { 1, 1, 1, 1, 0 }, { 1, 0, 0, 0, 0 }, { 1, 1, 0, 0, 0 }, { 1, 1, 1, 1, 1 } };
		System.out.println(Arrays.toString(kWeakestRows(mat, 3)));
	}
}
