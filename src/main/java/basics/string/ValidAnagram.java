package basics.string;

public class ValidAnagram {
	
	public static boolean validAnagram(String s, String t) {
		int[] arr = new int[26];
		for (char ch : s.toCharArray())
			arr[ch - 'a']++;
		for (char ch : t.toCharArray())
			arr[ch - 'a']--;
		for (int i : arr)
			if (i != 0)
				return false;
		return true;
	}

	public static void main(String[] args) {
		
	}

}
