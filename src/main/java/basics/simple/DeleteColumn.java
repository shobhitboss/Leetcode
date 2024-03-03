//944. Delete Columns to Make Sorted
package basics.simple;

public class DeleteColumn {

	public static int minDeletionSize(String[] A) {
		int count = 0;
		for (int i = 0; i < A[0].length(); i++) {
			for (int j = 0; j < A.length - 1; j++)
				if (A[j].charAt(i) > A[j + 1].charAt(i)) {
					count++;
					break;
				}
		}
		return count;
	}

	public static void main(String[] args) {
		String[] arr = { "rrjk", "furt", "guzm" };
		System.out.println(minDeletionSize(arr));
	}
}
