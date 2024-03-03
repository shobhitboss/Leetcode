package leetcode;

public class ExcelSheetColTitle {

    public static String convertToTitle(int n) {
        StringBuilder result = new StringBuilder();

        while (n > 0) {
            n--;
            result.insert(0, (char) ('A' + n % 26));
            System.out.println(result.toString());
            n /= 26;
        }
        return result.toString();
    }

    public static void main(String[] args) {
        convertToTitle(22334);
    }
}
