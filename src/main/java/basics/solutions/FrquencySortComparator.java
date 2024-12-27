package basics.solutions;

import java.util.*;
import java.util.Map.Entry;
import java.util.stream.Collectors;

public class FrquencySortComparator {

    public static void main(String[] args) {
        int arr[] = {2, 3, 2, 5, 4, 29, 2, 23, 76, 23, 43, 8, 7, 8, 5, 7, 5, 7, 7, 7, 7, 7, 7, 7, 5, 7, 7, 9, 789,
                78978, 897, 89, 789, 789, 12, 2, 3, 3, 3, 12};

        Comparator<Entry<Integer, Integer>> valComparator = (e1, e2) -> e1.getValue().compareTo(e2.getValue());

        Map<Integer, Integer> mapp = new HashMap<>();
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
