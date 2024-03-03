package basics.def;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class sample {
	public static void main(String args[]) throws Exception {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter out = new PrintWriter(System.out);
		sample.problem(in, out);
		in.close();
		out.close();
		System.exit(0);
	}

	private static void problem(BufferedReader in, PrintWriter out) throws NumberFormatException, IOException {
		int temp = Integer.valueOf(in.readLine());
		while (temp-- > 0) {

		}

	}

}
