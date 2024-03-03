package basics.others;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class count_Move {
	public static void main(String args[]) throws Exception {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter out = new PrintWriter(System.out);
		count_Move.problem(in, out);
		in.close();
		out.close();
		System.exit(0);
	}

	static void problem(BufferedReader in, PrintWriter out) throws NumberFormatException, IOException {
		int size = Integer.parseInt(in.readLine());
		Long[] arr = new Long[size];
		String[] str = in.readLine().split(" ");
		long count = 0, move = 0;
		arr[0] = Long.parseLong(str[0]);
		for (int i = 1; i < size; i++) {
			arr[i] = Long.parseLong(str[i]);
			if (arr[i - 1] >= arr[i]) {
				count = (arr[i - 1] - arr[i]) + 1;
				move = move + count;
				arr[i] = arr[i] + count;
				count = 0;
			}
		}
		System.out.println(move);
	}
}
