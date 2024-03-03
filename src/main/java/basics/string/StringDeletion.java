package basics.string;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;
import java.util.TreeMap;

public class StringDeletion {
	public static void main(String[] args) throws IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter out = new PrintWriter(System.out);
		StringDeletion.solution(in, out);
		in.close();
		out.close();
		System.exit(0);
	}

	private static void solution(BufferedReader in, PrintWriter out) throws NumberFormatException, IOException {
		Integer.valueOf(in.readLine());
		String str = in.readLine();
		HashMap<Character, Integer> map = new HashMap<>();
		for (int i = 0; i < str.length(); i++) {
			char ch = str.charAt(i);
			if (map.containsKey(str.charAt(i))) {
				int val = map.get(ch);
				val++;
				map.put(ch, val);
			} else
				map.put(ch, 1);
		}
		TreeMap<Integer, List<Character>> mapp = new TreeMap<>();
		for (Entry<Character, Integer> entry : map.entrySet()) {
			Character key = entry.getKey();
			int value = entry.getValue();
			if (mapp.containsKey(value)) {
				List<Character> li = mapp.get(value);
				li.add(key);
				mapp.put(value, li);
			} else {
				ArrayList<Character> li = new ArrayList<Character>();
				li.add(key);
				mapp.put(value, li);
			}
		}
		System.out.println(mapp.size());
	}
}
