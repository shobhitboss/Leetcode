package problems;

import java.util.HashSet;

public class UniqueNumber {
    public static void main(String[] args) {
        String str = "shobhit";
        System.out.println(getMaxCount(str));
    }

    public static int getMaxCount(String str) {
        int maxSize = 0;
        HashSet<Character> sett = new HashSet<>();
        for (char ch : str.toCharArray()) {
            if (sett.contains(ch)) {
                if (sett.size() > maxSize) {
                    maxSize = sett.size();
                    sett.clear();
                }
            }
            sett.add(ch);
        }
        if (sett.size() > maxSize) {
            maxSize = sett.size();
        }
        return maxSize;
    }
}
