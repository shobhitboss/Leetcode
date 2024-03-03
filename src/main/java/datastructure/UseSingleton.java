package datastructure;

public class UseSingleton {

	public static void main(String[] args) {
		long start = System.currentTimeMillis();
		Singleton obj = Singleton.getInstance();
		long end = System.currentTimeMillis();

		System.out.println("end : " + end + " start : " + start);

		start = System.currentTimeMillis();
		Singleton obj2 = Singleton.getInstance();
		end = System.currentTimeMillis();

		System.out.println("end : " + end + " start : " + start);
	}
}
