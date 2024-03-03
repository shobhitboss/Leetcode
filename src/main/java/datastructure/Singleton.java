package datastructure;

public class Singleton {

	private static volatile Singleton instance;
	public static volatile String str;

	private Singleton() {

	}

	/**
	 * Method to get instance of Singleton class
	 * 
	 * @return : returning instance of Singleton class
	 */
	public static Singleton getInstance() {
		if (instance == null) {
			synchronized (Singleton.class) {
				if (instance == null) {
					instance = new Singleton();
				}
			}
			str = "this is using Singleton method to get Instance";
		}
		return instance;
	}
}
