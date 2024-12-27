package basics.solutions;

import java.util.*;

public class FrequencySort3 {

    public static void main(String[] args) {
        int arr[] = {2, 7, 7, 3, 2, 5, 4, 29, 2, 23, 76, 23, 43, 8, 7, 8, 5, 7, 5, 7, 7, 7, 7, 7, 5, 7, 7, 9, 789, 78978, 897, 89, 789, 789, 12, 2, 3, 3, 3, 12};

        Map<Integer, Integer> mapp = new HashMap<>();
        for (int i : arr) {
            mapp.put(i, mapp.getOrDefault(i, 0) + 1);
        }

        List<Map.Entry<Integer, Integer>> li = new LinkedList<>(mapp.entrySet());
        li.sort((o1, o2) -> Objects.equals(o1.getValue(), o2.getValue()) ? o1.getKey().compareTo(o2.getKey()) : o1.getValue().compareTo(o2.getValue()));
        System.out.println(li);

        int a = 128;
        while (a > 0) {
            System.out.println(a);
            a = a >> 1;
        }
    }
}
