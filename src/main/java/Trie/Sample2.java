package Trie;

import org.apache.commons.collections4.Trie;
import org.apache.commons.collections4.trie.PatriciaTrie;

import java.util.*;

public class Sample2 {
    static Trie<String, String> trie;

    public static void main(String[] args) {
        List<String> li = new ArrayList<>();
        li.addAll(Arrays.asList("apple", "app", "appear", "apsrt"));
        System.out.println(getResult(li, "app"));
    }

    private static void printPrefixMap(SortedMap<String, String> prefixMap) {
        System.out.println("-------");
        for (Map.Entry<String, String> entry : prefixMap.entrySet()) {
            System.out.println("Key: <" + entry.getKey() + ">, Value: <" + entry.getValue() + ">");
        }
        System.out.println("-------");
    }


    public static String getResult(List<String> input, String word) {
        trie = new PatriciaTrie<>();
        String temp = "2";
        for (String a : input) {
            trie.put(a, a);
        }

        SortedMap<String, String> prefixMap = trie.prefixMap(word);
        return prefixMap.keySet().toString();
    }
}
