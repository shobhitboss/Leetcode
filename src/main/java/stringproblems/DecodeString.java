package stringproblems;

public class DecodeString {
    static StringBuilder sb;

    public static void main(String[] args) {
        String str = "3[a]2[bc]";
        System.out.println(str);
        System.out.println(decodeString(str));
    }

    public static String decodeString(String str) {
        sb = new StringBuilder(str);
        return decode(str);
    }

    public static String decode(String str) {
        if (str.lastIndexOf('[') == -1)
            return sb.toString();
        else {
            int i = str.lastIndexOf('[');
            int j = str.indexOf(']', i);
            int ind = i - 1;
            while (ind > -1 && Character.isDigit(str.charAt(ind))) {
                ind--;
            }
            int a = Integer.valueOf(str.substring(ind + 1, i));
            decode(sb.replace(ind + 1, j + 1, str.substring(i + 1, j).repeat(a)).toString());
        }
        return sb.toString();
    }
}
