package basics.others;

public class AsciiValues {

	public static long getTime(String s) {
		if (s.isEmpty() || s == "")
			return 0;
		String str = "A" + s;
		int time = 0, temp = 0;
		for (int i = 1; i < str.length(); i++) {
			temp = str.charAt(i) - str.charAt(i - 1);
			if (temp >= 13) {
				time += (26 - (str.charAt(i) - str.charAt(i - 1)));
			} else if (temp >= 0 && temp <= 13) {
				time += str.charAt(i) - str.charAt(i - 1);
			} else if (temp > -14) {
				time += str.charAt(i - 1) - str.charAt(i);
			} else
				time += (26 - (str.charAt(i - 1) - str.charAt(i)));
			System.out.println(str.charAt(i) + " " + time);
		}
		return time;
	}

	public static void main(String[] args) {
		// Special Characters (32�47 / 58�64 / 91�96 / 123�126):
//		for (int i = 32; i <= 126; i++)
//			System.out.println(i + " : " + (char) i);

		//System.out.println(getTime("ZNMD"));
//		System.out.println(getTime("BZA"));
		System.out.println(getTime("BZGB"));
	}
}
