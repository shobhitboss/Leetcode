//1385. Find the Distance Value Between Two Arrays
package basics.array;

public class ArrayDistance {

    public static int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
        int distance = 0;
        int i, j;
        for (i = 0; i < arr1.length; i++) {
            for (j = 0; j < arr2.length; j++) {
                if (Math.abs(arr1[i] - arr2[j]) <= d)
                    break;
            }
            if (j == arr2.length)
                distance++;
        }
        return distance;
    }

    public static void main(String[] args) {
        int[] arr1 = {2, 1, 100, 3}, arr2 = {-5, -2, 10, -3, 7};
        int d = 6;
        System.out.println(findTheDistanceValue(arr1, arr2, d));
    }
}
