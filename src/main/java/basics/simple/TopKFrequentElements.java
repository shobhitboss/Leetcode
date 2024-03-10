//347. Top K Frequent Elements    
package basics.simple;

import java.util.*;

public class TopKFrequentElements {

    public static List<String> topKFrequentElements(String[] words, int k) {
        List<String> ans = new ArrayList<>();
        Map<String, Integer> map = new TreeMap<>();

        for (String word : words)
            map.put(word, map.getOrDefault(word, 0) + 1);

        map.entrySet().stream().sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .forEach(m -> ans.add(m.getKey()));

        return ans.subList(0, k);
    }

    public static void main(String[] args) {
        String[] out = {"i", "love", "leetcode", "i", "love", "coding"};
        System.out.println(topKFrequentElements(out, 4));
    }

}
