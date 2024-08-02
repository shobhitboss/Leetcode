package Apple;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class LongestUniqueString {
    public static void main(String[] args) throws ParseException {
//        System.out.println(longestUniqueSubstring("tiwariabcde"));
//        List<String> newList = new ArrayList<>();
//        newList.addAll(Arrays.asList("this", "is", " working", "fine"));
//        newList.remove(0);
//        System.out.println(newList);

        String inputDate = "31/07/2024";
        System.out.println(changeDateFormat(inputDate));
        System.out.println(changeDate(inputDate));
//        bhitabdjtuskfvhslsho
    }


    public static String changeDateFormat(String inputDate){
        inputDate = "31/07/2024";
        String[] arr = inputDate.split("/");
        return arr[2] + "-" + arr[1]+ "-" + arr[0];
    }

    public static String changeDate(String date) throws ParseException {
        final String OLD_FORMAT = "dd/MM/yyyy";
        final String NEW_FORMAT = "yyy-MM-dd";

        SimpleDateFormat sdf = new SimpleDateFormat(OLD_FORMAT);
        Date d = sdf.parse(date);
        sdf.applyPattern(NEW_FORMAT);
        return sdf.format(d);
    }

    public static int longestUniqueSubstring(String s) {
        Set<Character> set = new HashSet();
        int max = 0, left = 0;
        for (int right = 0; right < s.length(); right++) {
            if (!set.add(s.charAt(right))) {
                left = s.indexOf(s.charAt(right), left) + 1;
            }
            max = Math.max(max, right - left + 1);
        }
        return max;
    }
}
