package learning;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class TempCheck {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 2, 4, 5, 3, 5, 6, 4, 5, 6, 7, 4, 3, 3, 6, 6, 3, 5, 6, 3, 4, 4, 4, 3, 2, 5, 6, 4, 5};
        Integer[] temp = Arrays.stream(arr).boxed().toArray(Integer[]::new);
        Map<Integer, Integer> mapp = new HashMap<>();
        for (int i : arr) {
            mapp.put(i, mapp.getOrDefault(i, 0) + 1);
        }
        Arrays.sort(temp, (x, y) -> mapp.get(x) != mapp.get(y) ? mapp.get(y) - mapp.get(x) : x - y);
        System.out.println(Arrays.toString(temp));
    }
}
