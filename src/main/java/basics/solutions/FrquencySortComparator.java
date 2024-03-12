package basics.solutions;

import java.util.*;
import java.util.Map.Entry;
import java.util.stream.Collectors;

public class FrquencySortComparator {

    public static void main(String[] args) {
        int arr[] = {2, 3, 2, 5, 4, 29, 2, 23, 76, 23, 43, 8, 7, 8, 5, 7, 5, 7, 7, 7, 7, 7, 7, 7, 5, 7, 7, 9, 789,
                78978, 897, 89, 789, 789, 12, 2, 3, 3, 3, 12};

        Comparator<Entry<Integer, Integer>> valComparator = new Comparator<Entry<Integer, Integer>>() {
            @Override
            public int compare(Entry<Integer, Integer> e1, Entry<Integer, Integer> e2) {
                return e1.getValue() == e2.getValue() ? (e1.getKey() < e2.getKey() ? 1 : -1)
                        : (e1.getValue() < e2.getValue() ? -1 : 1);
            }
        };

        Map<Integer, Integer> mapp = new TreeMap<>();
        for (int i : arr)
            mapp.put(i, mapp.getOrDefault(i, 0) + 1);

        LinkedHashMap<Integer, Integer> sorted = mapp.entrySet().stream().sorted(valComparator)
                .collect(Collectors.toMap(Entry::getKey, Entry::getValue, (o1, o2) -> o1, LinkedHashMap::new));

        int temp = 0;

        for (Entry<Integer, Integer> entry : sorted.entrySet())
            Arrays.fill(arr, temp, temp += entry.getValue(), entry.getKey());

        System.out.println(Arrays.toString(arr));
    }

}
