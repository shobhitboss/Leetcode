package leetcode;

import java.util.PriorityQueue;
import java.util.Queue;

public class RefuelStops {
    public static void main(String[] args) {
        RefuelStops rs = new RefuelStops();
        int[][] arr = {{10, 60}, {20, 15}, {30, 15}, {60, 20}};
        System.out.println(rs.minRefuelStops(100, 10, arr));
    }

    public int minRefuelStops(int target, int startFuel, int[][] stations) {
        int maxReach = startFuel;
        Queue<int[]> pq = new PriorityQueue<>((a, b) -> b[1] - a[1]);
        int count = 0;
        int index = 0;

        while (maxReach < target) {
            while (index < stations.length && stations[index][0] <= maxReach) {
                pq.add(stations[index]);
                index++;
            }
            if (pq.isEmpty())
                return -1;
            maxReach += pq.remove()[1];
            count++;
        }
        return count;
    }
}
