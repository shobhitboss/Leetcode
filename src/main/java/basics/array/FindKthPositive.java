//1539. Kth Missing Positive Number
package basics.array;

public class FindKthPositive {
	
	public static int findKthPositive(int[] arr, int k) {
        int index = 0;
        for(int i = 1; i < arr[arr.length - 1]; i++) {
            if(i != arr[index])
                k--;
            else
                index++;
            if (k == 0)
                return i;
        }
        return arr[arr.length - 1] + k;
    }

	public static void main(String[] args) {
		int[] arr = {1,2,3,4};
		System.out.println(findKthPositive(arr, 2));
	}

}
