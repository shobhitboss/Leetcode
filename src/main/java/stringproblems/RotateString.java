package stringproblems;

public class RotateString {

	public static boolean rotateString(String A, String B) {
		if (A.length() != B.length())
			return false;
		if (A.length() < 2 && B.length() < 2)
			return A.equals(B);
		if (A.equals(B))
			return true;
		for (int i = 1; i < A.length(); i++) {
			String str = A.substring(i) + A.substring(0, i);
			if (B.equals(str))
				return true;
		}
		return false;
	}

	public static void main(String[] args) {
		System.out.println(rotateString("ohbrwzxvxe", "uornhegseo"));
		System.out.println(rotateString("abcde", "abcde"));
		System.out.println(rotateString("bbbacddceeb", "ceebbbbacdd"));
	}
}
