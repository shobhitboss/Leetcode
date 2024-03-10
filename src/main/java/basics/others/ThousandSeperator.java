package basics.others;

public class ThousandSeperator {

    public static String thousandSeparator(int n) {
        String str = "" + n;
        int dec = str.length() / 3;
        int index = str.length() - 1;
        StringBuilder sb = new StringBuilder();
        while (dec > 0) {
            String s = '.' + str.substring(index - 2, index + 1);
            sb.append(s);
            dec--;
            index = index - 3;
        }
        sb.append(str, 0, index + 1);
        System.out.println(sb);
        return str;

    }

    public static void main(String[] args) {
        System.out.println(thousandSeparator(123321));
    }

}
