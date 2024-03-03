package basics.tempcodes;

import java.util.Scanner;
import java.util.Vector;

public class GFG {
	public static void printCombination(Vector<Integer>[] arr) {
		int n = arr.length;
		int[] indices = new int[n];
		for (int i = 0; i < n; i++)
			indices[i] = 0;

		while (true) {
			for (int i = 0; i < n; i++)
				System.out.print(arr[i].get(indices[i]) + " ");
			System.out.println();
			int next = n - 1;
			while (next >= 0 && (indices[next] + 1 >= arr[next].size()))
				next--;
			if (next < 0)
				return;
			indices[next]++;
			for (int i = next + 1; i < n; i++)
				indices[i] = 0;
		}
	}

	@SuppressWarnings("unchecked")
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		Vector<Integer>[] arr = new Vector[num];
		for (int i = 0; i < num; i++) {
			String str = sc.nextLine();
			System.out.println(str);
			String[] srr = str.split("// ");
			int size = srr.length;
			for (int j = 0; j < size; j++) {
				arr[i] = new Vector<Integer>();
				arr[i].add(Integer.parseInt(srr[j]));
			}
		}
		printCombination(arr);
		sc.close();
	}
}
