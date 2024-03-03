package stringproblems;

public class IsSubsequence {

	public static boolean isSubsequence(String s, String t) {
		if(s == null || t == null)
			return false;
		int j = 0;
		for(char ch : s.toCharArray()) {
			int index = t.indexOf(ch, j);
			if(index == -1)
				return false;
			j = index + 1;
		}
		return true;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
}
