//7. Reverse Integer
package leetcode;

public class ReverseNumber {

    public static int reverseNumber(int n) {
        if (n >= Integer.MAX_VALUE || n <= Integer.MIN_VALUE)
            return 0;
        boolean isNegative = n < 0 ? true : false;
        int num = n, revNum = 0;
        if (isNegative)
            num *= -1;
        while (num != 0) {
            int rem = num % 10;
            if (revNum > Integer.MAX_VALUE / 10)
                return 0;
            revNum = revNum * 10 + rem;
            num /= 10;
        }
        System.out.println(num);
        return isNegative == true ? revNum * -1 : revNum;
    }

    public static void main(String[] args) {
        System.out.println(reverseNumber(-436488794));
    }

}
