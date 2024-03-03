package basics.string;

public class AnagramStrings {

	public static void main(String[] args) {
		if (isAnagram("maagic", "caamig") == true)
			System.out.println("Both the strings are anagram");
	}

	public static boolean isAnagram(String str1, String str2) {
		int arr[] = new int[26];
		for (char ch : str1.toLowerCase().toCharArray())
			arr[ch - 97]++;
		for (char ch : str2.toLowerCase().toCharArray())
			arr[ch - 97]--;
		for (int i = 0; i < 26; i++) {
			if (arr[i] != 0) {
				System.out.println("Not Anagram");
				return false;
			}
		}
		return true;
	}
}
