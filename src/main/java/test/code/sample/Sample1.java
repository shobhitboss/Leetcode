package test.code.sample;

import java.util.HashMap;
import java.util.Hashtable;

public class Sample1 {
    public static void main(String[] args) {
        HashMap<String, String> maps = new HashMap<>();
        maps.put("this", "is");
        maps.put("this1", "is1");
        maps.put("this2", "is2");
        maps.put("this3", "is3");
        maps.put("this4", "is4");
        maps.put("this5", "is5");

        System.out.println(maps.toString());

        for (String key : maps.keySet()) {
            if (key.equals("this3")) {
                maps.replace("this3", "1244");
            }
        }
        System.out.println(maps.toString());


        Hashtable<String, String> tabs = new Hashtable<>();
        tabs.put("this", "is");
        tabs.put("this1", "is1");
        tabs.put("this2", "is2");
        tabs.put("this3", "is3");
        tabs.put("this4", "is4");
        tabs.put("this5", "is5");



        System.out.println(tabs);

        for (String key : tabs.keySet()) {
            if (key.equals("this3")) {
                tabs.replace("this3", "1244");
            }
        }
        System.out.println(tabs);

    }
}
