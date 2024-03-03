package basics.string;

import java.util.Arrays;

public class CharMaxOccurance {

	public static void main(String[] args) {
		String str = "abcdefghijklmnopqrstuvfjkslhfrlutyerlifuhfdhadljahlfreteurfhdvnxmcnvbeuetpewxyz";
		int[] intArr = new int[26];
		int max = 0;
		for (char ch : str.toCharArray()) {
			int temp = Integer.valueOf(ch) - 97;
			intArr[temp]++;
			if (max < intArr[temp])
				max = intArr[temp];
		}
		System.out.println(Arrays.toString(intArr));
		System.out.println("max = " + max);
		for (int i = 0; i < 26; i++) {
			if (max == intArr[i]) {
				int value = i + 97;
				System.out.println((char) value);
				break;
			}
		}
	}
}
