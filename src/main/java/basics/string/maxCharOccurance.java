package basics.string;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.*;
import java.util.Map.Entry;

public class maxCharOccurance {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter wr = new PrintWriter(System.out);
		String str = br.readLine().trim();
		char out_ = SolveIt(str);
		wr.println(out_);
		wr.close();
		br.close();
	}

	static char SolveIt(String str) {
		HashMap<Character, Integer> arrMapp = new HashMap<>();
		for (char ch : str.toCharArray()) {
			if (arrMapp.containsKey(ch)) {
				int val = arrMapp.get(ch) + 1;
				arrMapp.put(ch, val);
			} else
				arrMapp.put(ch, 1);
		}
		TreeMap<Integer, List<Character>> mapp = new TreeMap<>();
		for (Entry<Character, Integer> entry : arrMapp.entrySet()) {
			Character key = entry.getKey();
			int value = entry.getValue();
			if (mapp.containsKey(value)) {
				List<Character> li = mapp.get(value);
				li.add(key);
				mapp.put(value, li);
			} else {
				List<Character> li = new ArrayList<Character>();
				li.add(key);
				mapp.put(value, li);
			}
		}
		List<Character> li = mapp.get(mapp.lastKey());
		Collections.sort(li);
		return li.get(0);
	}
}