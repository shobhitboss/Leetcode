package basics.string;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.Set;

public class PalindromeSubstringCount {

	public static void main(String args[]) throws Exception {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter out = new PrintWriter(System.out);
		PalindromeSubstringCount.problem(in, out);
		in.close();
		out.close();
		System.exit(0);
	}

	private static void problem(BufferedReader in, PrintWriter out) throws NumberFormatException, IOException {
		Integer.valueOf(in.readLine());
		String str = in.readLine();
		Set<Character> set = new HashSet<>();
		for (int j = 0; j < str.length(); j++)
			set.add(str.charAt(j));
		System.out.println(set.size() + count(str));
	}

	static int count(String str) {
		String temp = "";
		StringBuffer stf = new StringBuffer();
		int count = 0;
		for (int i = 0; i < str.length(); i++) {
			for (int j = i + 1; j <= str.length(); j++) {
				temp = str.substring(i, j);
				if (temp.length() > 1) {
					stf = new StringBuffer(temp);
					stf.reverse();
					if (stf.toString().compareTo(temp) == 0)
						count++;
				}
			}
		}
		System.out.println(stf.toString());
		return count;
	}
}
