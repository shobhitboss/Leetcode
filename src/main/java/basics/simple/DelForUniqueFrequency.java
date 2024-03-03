//1647. Minimum Deletions to Make Character Frequencies Unique
package basics.simple;

import java.util.Arrays;

public class DelForUniqueFrequency {

	public static int topKFrequent(String s) {
		int[] arr = new int[26];
		for(char ch : s.toCharArray())
			arr[ch - 97]++;
		Arrays.sort(arr);
		System.out.println(Arrays.toString(arr));
		
		return 0;
	}

	public static void main(String[] args) {
		String str = "thisisstring";
		System.out.println(topKFrequent(str));
	}
}
