package basics.def;
class MultithreadingDemo extends Thread {
	public void run() {
		try {
			System.out.println("Thread " + Thread.currentThread().getId() + " is running");

		} catch (Exception e) {
			System.out.println("Exception is caught");
		}
	}
}

public class Multithread {
	public static void main(String[] args) {
		for (int i = 0; i < 8; i++) {
			MultithreadingDemo object = new MultithreadingDemo();
			object.start();
		}
	}
}