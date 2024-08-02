package problems;

import java.util.*;

public class CommonElements {
    public static void main(String[] args) {
        List<Integer> list1 = Arrays.asList(1, 1, 2, 3, 4, 6);
        List<Integer> list2 = Arrays.asList(1, 1, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6);

        System.out.println(commonElements(list1, list2));

    }

    public static List<Integer> commonElements(List<Integer> list1, List<Integer> list2) {
        List<Integer> res = new ArrayList<>();
        int i = 0, j = 0;
        Collections.sort(list1);
        Collections.sort(list2);

        for (i = 0; i < list1.size(); i++) {
            if (list2.get(j) == list1.get(i)) {
                res.add(list1.get(i));
                j++;
            } else if (list2.get(j) < list1.get(i))
                j++;
        }

        for (; j < list2.size(); j++) {
            if (list2.get(j) == list1.get(i - 1)) {
                res.add(list1.get(i - 1));
                break;
            }

        }
        return res;
    }
}
