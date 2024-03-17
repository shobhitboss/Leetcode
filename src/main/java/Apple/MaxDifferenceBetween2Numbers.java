package Apple;

public class MaxDifferenceBetween2Numbers {
    public static void main(String[] args) {
        int[] arr = {3, 6, 10, 1, 4, 6, 5, 15};
        System.out.println(maxDifference(arr));
    }

    public static int maxDifference(int[] arr) {
        if (arr.length == 2) {
            return arr[1] - arr[0];
        } else {
            int min = arr[0];
            int maxDiff = arr[1] - arr[0];
            for (int i = 1; i < arr.length; i++) {
                if (arr[i] - min > maxDiff)
                    maxDiff = arr[i] - min;
                if (arr[i] < min)
                    min = arr[i];
            }
            return maxDiff;
        }
    }
}
