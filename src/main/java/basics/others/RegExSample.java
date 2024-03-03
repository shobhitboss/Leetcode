package basics.others;

import java.io.IOException;
import java.util.HashSet;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegExSample {

	public static void main(String[] args) throws IOException {
		String input1 = "Soon after the World War 2 ended on 02-09-1945 the UN was established, on 24-10-1945 24-10-1923 24-10-1921 24-10-1933.";
		HashSet<String> sett = new HashSet<>();
		Matcher m = Pattern.compile("(\\d{1,2}-\\d{1,2}-\\d{4}|\\d{1,2}-\\d{1,2})", Pattern.CASE_INSENSITIVE)
				.matcher(input1);
		while (m.find()) {
			sett.add(m.group(1).substring(6, 10));
		}
		System.out.println(sett.toString() + "\n" + sett.size());
	}

}
