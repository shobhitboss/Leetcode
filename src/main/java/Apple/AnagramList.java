package Apple;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AnagramList {

    public static void main(String[] args) {
        String[] arr = {"art", "rat", "tar", "mic", "ice", "abcd", "dabc", "listen", "siLent", "Triangle", "Integral"};
        getAnagramList(arr);
    }

    public static List<List<String>> getAnagramList(String[] list) {
        List<List<String>> output = new ArrayList<>();
        for (String str : list) {
            List<String> out = new ArrayList<>();
            str = str.toLowerCase();
            char[] arr = str.toCharArray();
            Arrays.sort(arr);
            String a = String.valueOf(arr);
            for (String b : list) {
                b = b.toLowerCase();
                if (!b.equals(str)) {
                    char[] barr = b.toCharArray();
                    Arrays.sort(barr);
                    String bstr = String.valueOf(barr);
                    if (a.equals(bstr))
                        out.add(b);
                }
            }
            System.out.println(str + " : " + out);
        }
        return output;
    }
}
