package datastructure;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ReverseArrayList {

	public static void main(String[] args) {
		List<Integer> li = new ArrayList<Integer>();
		li.addAll(Arrays.asList(2, 4, 5, 7, 6, 8, 9));
		for (int i = 0, j = li.size() - 1; i < j; i++, j--) {
			int temp = li.get(j);
			li.set(j, li.get(i));
			li.set(i, temp);
		}
		System.out.println(li.toString());
	}
}
