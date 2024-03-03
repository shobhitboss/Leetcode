package basics.tempcodes;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFiles {

	public static void main(String[] args) throws FileNotFoundException {
		File fl = new File("C:/Users/shobhit.tiwari/Desktop/iOS_Crash_Logs.txt");
		Scanner sc = new Scanner(fl);
		while (sc.hasNext()) {
			String str = sc.nextLine();
			if (str.contains("state transition")) {
				System.out.println(str.substring(str.indexOf("headingFilter") + 15, str.length() - 2));
				break;
			}
		}
		sc.close();
	}
}
