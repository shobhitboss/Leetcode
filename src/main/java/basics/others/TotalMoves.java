/*Program to get total moves to make two lists same*/

package basics.others;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TotalMoves {

	public static void main(String[] args) {
		List<Integer> arr1 = Arrays.asList(123, 543);
		List<Integer> arr2 = Arrays.asList(321, 279);
		int total = 0;
		List<Integer> new1 = new ArrayList<Integer>();
		List<Integer> new2 = new ArrayList<Integer>();

		for (char ch : arr1.toString().toCharArray())
			if (ch >= 48 && ch <= 57)
				new1.add((int) ch);
		for (char ch : arr2.toString().toCharArray())
			if (ch >= 48 && ch <= 57)
				new2.add((int) ch);

		for (int i = 0; i < new1.size(); i++) {
			int temp1 = new1.get(i);
			int temp2 = new2.get(i);
			total += temp1 > temp2 ? temp1 - temp2 : temp2 - temp1;
		}
		System.out.println(total);
	}
}
