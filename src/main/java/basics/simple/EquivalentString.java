//1662.Check If Two String Arrays are Equivalent  
package basics.simple;

public class EquivalentString {
	public static boolean arrayStringsAreEqual(String[] word1, String[] word2) {
		StringBuilder sb1 = new StringBuilder();
		StringBuilder sb2 = new StringBuilder();
		for (String str : word1)
			sb1.append(str);
		for (String str : word2)
			sb2.append(str);
		return (sb1.toString()).equals(sb2.toString());
	}

	public static void main(String[] args) {
		String[] word1 = { "ab", "c" }, word2 = { "a", "bc" };
		System.out.print(arrayStringsAreEqual(word1, word2));
	}
}
