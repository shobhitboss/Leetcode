package test.code.sample;

import java.util.HashMap;
import java.util.Map;

public class MapAirline {
    public static void main(String[] args) {
        Map<String, String> locs = new HashMap<>();
        locs.put("FRA", "AMS");
        locs.put("AMS", "BER");
        locs.put("BAR", "DOH");
        findRoute(locs);
    }

    public static void findRoute(Map<String, String> locations) {
        String temp = null, base = null, next = null;
        Map<String, String> output = new HashMap<>();
        for (String frs : locations.keySet()) {
            if (base == null) {
                base = frs;
                temp = frs;
                output.put(base, null);
            } else
                base = frs;
            if (locations.containsKey(locations.get(frs))) {
                next = locations.get(frs);
            } else {
                output.put(temp, locations.get(frs));
            }
        }
        System.out.println(output);
    }
}
