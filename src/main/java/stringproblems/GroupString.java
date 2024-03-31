package stringproblems;

import java.util.*;

public class GroupString {
    public static void main(String[] args) {
        List<String> li = new ArrayList<>(Arrays.asList("abc", "bca", "cab", "xyz", "yzx", "cba", "aaaa"));
//        System.out.println(groupString(li));

        String[] words = {"abba", "baba", "bbaa", "cd", "cd"};
        System.out.println(removeAnagrams(words));
    }

    public static List<List<String>> groupString(List<String> list) {
        Map<String, List<String>> mapp = new HashMap<>();
        List<List<String>> output = new ArrayList<>();
        for (String str : list) {
            char[] arr = str.toCharArray();
            Arrays.sort(arr);
            String temp = new String(arr);
            mapp.computeIfAbsent(temp, k -> new ArrayList<>()).add(str);
        }
        for (String str : mapp.keySet()) {
            output.add(isSame(mapp.get(str)));
        }
        return output;
    }

    public static List<String> isSame(List<String> list) {
        String a = list.get(0);
        for (int i = 0; i < list.size(); i++) {
            if (!isStringRotated(a, list.get(i)))
                list.remove(list.get(i));
        }
        return list;
    }

    public static boolean isStringRotated(String str1, String str2) {
        str1 += str1;
        return str1.contains(str2);
    }

    public static List<String> removeAnagrams(String[] words) {
        Set<String> set = new HashSet<>();
        List<String> result = new ArrayList<>();
        for (String str : words) {
            char[] arr = str.toCharArray();
            Arrays.sort(arr);
            String a = String.valueOf(arr);
            if (!set.contains(a)) {
                result.add(str);
                set.add(a);
            }
        }
        return result;
    }
}
