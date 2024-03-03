package basics.others;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.TreeSet;

// Minimum swaps to move max number to mid of the array
public class MinimumSwaps {
	public static void main(String[] args) throws IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter out = new PrintWriter(System.out);
		MinimumSwaps.problem(in, out);
		in.close();
		out.close();
		System.exit(0);
	}

	private static void problem(BufferedReader in, PrintWriter out) throws NumberFormatException, IOException {
		int test = Integer.valueOf(in.readLine());
		while (test-- > 0) {
			in.readLine();
			String[] str = in.readLine().split(" ");
			int[] array = Arrays.stream(str).mapToInt(Integer::parseInt).toArray();
			minimumSwaps(array);
		}
	}

	public static void minimumSwaps(int a[]) {
		int max = -1, n = a.length, i = 0, left = 0, right = 0, mid = 0, temp = 0;
		for (i = 0; i < n; i++) {
			if (a[i] >= max) {
				max = a[i];
			}
		}
		TreeSet<Integer> sett = new TreeSet<Integer>();
		for (i = 0; i < n; i++) {
			if (a[i] == max) {
				temp = i + 1;
				sett.add(temp);
			}
		}
		if (n % 2 != 0) {
			mid = n / 2 + 1;
			if (!sett.contains(mid)) {
				if (sett.lower(mid) != null)
					left = mid - sett.lower(mid);
				if (sett.higher(mid) != null)
					right = sett.higher(mid) - mid;
			}
		} else {
			mid = n / 2;
			if (!(sett.contains(mid) || sett.contains(mid + 1))) {
				if (sett.lower(mid) != null)
					left = (mid) - sett.lower(mid);
				if (sett.higher(mid + 1) != null)
					right = sett.higher(mid + 1) - (mid + 1);
			}
		}
		if (left == 0)
			System.out.println(right);
		else if (right == 0)
			System.out.println(left);
		else
			System.out.println(Math.min(left, right));
	}
}
