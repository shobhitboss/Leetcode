package basics.others;

public class TwoThreads implements Runnable {

	public static void main(String[] args) {
		Thread th1 = new Thread("First thread");
		Thread th2 = new Thread("Second thread");
		th1.start();
		th2.start();
		System.out.println(th1.getName());
		System.out.println(th2.getName());
		System.out.println(th1.getState());
	}

	public void run() {

	}

}
