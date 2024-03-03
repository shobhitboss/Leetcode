package basics.others;

import java.util.Collections;
import java.util.PriorityQueue;

public class LastStoneWeight {

	public static int lastStoneWeight(int[] stones) {
		PriorityQueue<Integer> queue = new PriorityQueue<Integer>(Collections.reverseOrder());
		for (int i : stones)
			queue.add(i);
		while (queue.size() > 1) {
			int max1 = queue.poll();
			int max2 = queue.poll();
			if (max1 - max2 > 0)
				queue.add(max1 - max2);
		}
		return queue.size() > 0 ? queue.poll() : 0;
	}

	public static void main(String[] args) {
		int[] stone = { 2, 7, 4, 1, 8, 1 };
		System.out.println(lastStoneWeight(stone));
	}

}
