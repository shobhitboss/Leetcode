//451. Sort Characters By Frequency

package datastructure;

import java.util.HashMap;
import java.util.PriorityQueue;

public class FrequencySort2 {

	public static String frequencySort(String s) {
		HashMap<Character, Integer> map = new HashMap<>();
		for (char ch : s.toCharArray())
			map.put(ch, map.getOrDefault(ch, 0) + 1);
		PriorityQueue<Character> pq = new PriorityQueue<>((a, b) -> map.get(b) - map.get(a));
		pq.addAll(map.keySet());
		StringBuilder sb = new StringBuilder();
		while (!pq.isEmpty()) {
			char ch = pq.remove();
			for (int i = 0; i < map.get(ch); i++)
				sb.append(ch);
		}
		return sb.toString();
	}

	public static void main(String[] args) {
		System.out.println(frequencySort("raadeaeere"));
	}

}
