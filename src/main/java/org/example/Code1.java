package org.example;


import java.util.*;

/**
 *
 */
public class Code1 {
    public static void main(String[] args) {
        String[][] data = {{"58523", "user_1", "resource_1"}, {"62314", "user_2", "resource_2"}, {"54001", "user_1", "resource_3"}, {"200", "user_6", "resource_5"}, {"215", "user_6", "resource_4"}, {"54060", "user_2", "resource_3"}, {"53760", "user_3", "resource_3"}, {"58522", "user_22", "resource_1"}, {"53651", "user_5", "resource_3"}, {"2", "user_6", "resource_1"}, {"100", "user_6", "resource_6"}, {"400", "user_7", "resource_2"}, {"100", "user_8", "resource_6"}, {"54359", "user_1", "resource_3"}};

        HashMap<String, List<Integer>> register = new HashMap<>();
        HashMap<String, List<Integer>> output = new HashMap<>();

        for (String[] entry : data) {
            register.computeIfAbsent(entry[1], k -> new ArrayList<>()).add(Integer.parseInt(entry[0]));
        }

        for (String key : register.keySet()) {
            List<Integer> record = Arrays.asList(Collections.min(register.get(key)), Collections.max(register.get(key)));
            output.put(key, record);
        }
        System.out.println(output);
    }
}
