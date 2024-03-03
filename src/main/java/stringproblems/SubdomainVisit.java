//811. Subdomain Visit Count
package stringproblems;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SubdomainVisit {

	public static List<String> subdomainVisits(String[] cpdomains) {
		List<String> res = new ArrayList<>();
		HashMap<String, Integer> mapp = new HashMap<>();
		for (String str : cpdomains) {
			String a = str.split("\\ ")[1];
			String b = str.split("\\ ")[0];
			if (!mapp.containsKey(a))
				mapp.put(a, Integer.valueOf(b));
			else {
				int temp = mapp.get(a) + Integer.valueOf(b);
				mapp.put(a, temp);
			}
			if (a.indexOf('.') > -1) {
				int size = a.split("\\.").length;
				int index = 0;
				for (int i = 1; i < size; i++) {
					index = a.indexOf('.', index);
					String c = a.substring(index + 1);
					if (!mapp.containsKey(c))
						mapp.put(c, Integer.valueOf(b));
					else {
						int temp2 = mapp.get(c) + Integer.valueOf(b);
						mapp.put(c, temp2);
					}
					index++;
				}
			}
		}
		for (Map.Entry<String, Integer> entry : mapp.entrySet()) {
			String str = entry.getValue() + " " + entry.getKey();
			res.add(str);
		}
		return res;
	}

	public static void main(String[] args) {
		String[] domains = { "900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org" };
		System.out.println(subdomainVisits(domains).toString());
	}

}
