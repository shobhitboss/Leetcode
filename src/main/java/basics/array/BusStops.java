//1184. Distance Between Bus Stops
package basics.array;

public class BusStops {

	public static int distanceBetweenBusStops(int[] distance, int start, int destination) {
		int first = 0, second = 0, stops = 0;
		stops = Math.abs(start - destination);
		for (int i = 0; i < distance.length; i++) {
			if (i == start || i == destination) {
				while (stops > 0) {
					first += distance[i];
					i++;
					stops--;
				}
			}
			second += distance[i];
		}
		return first < second ? first : second;
	}

	public static void main(String[] args) {
		int[] arr = { 7, 10, 1, 12, 11, 14, 5, 0 };
		int start = 7, end = 2;
		System.out.println(distanceBetweenBusStops(arr, start, end));
	}

}
