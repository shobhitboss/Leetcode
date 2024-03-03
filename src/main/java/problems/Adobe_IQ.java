package problems;

public class Adobe_IQ {
    public static StringBuilder rev = new StringBuilder();

    public static int missingNumber(int arr[], int n) {
        int xor = 1;
        for (int i = 2; i <= n; i++)
            xor ^= i;

        for (int i : arr)
            xor ^= i;

        return xor;
    }

    public static String reverse(String str) {
        int i = str.length();
        return reverseString(str, i);
    }

    public static String reverseString(String str, int i) {
        if (i == 0)
            return rev.toString();
        rev.append(str.charAt(i - 1));
        i--;
        return reverseString(str, i);
    }

    public static int numCount(int n, int max) {
        int ans = 0;
        for (int i = 1; i <= max; i++) {
            int count = 0;
            while (i > 0) {
                if (i % 2 != 0)
                    count++;
                i >>= 1;
            }
            if (count == n)
                ans++;
        }
        return ans;
    }

    public static void main(String args[]) {
        int n = 6;
        int[] arr = {1, 4, 3, 5, 6};
        System.out.println(missingNumber(arr, n));

        String str = "Shobhit";
        System.out.println(reverse(str));

        int x = -4;
        System.out.println(x >> 1);
        int y = 4;
        System.out.println(y >> 1);

        System.out.println("number : " + numCount(2, 5));
    }

}
