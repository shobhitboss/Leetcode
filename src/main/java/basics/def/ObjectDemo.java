package basics.def;
import java.util.HashMap;

public class ObjectDemo {

	public static void main(String args[]) {
		// Array of object
		Object[] ob = new Object[10];
		ob[1] = "name";
		ob[2] = 10;

		for (Object obj : ob)
			System.out.println(String.valueOf(obj));

		HashMap<String, String> sample = new HashMap<String, String>();
		sample.put("newtest", null);
		sample.put("abd", null);
		sample.put(null, null);

		System.out.println(sample.toString());
	}
}
