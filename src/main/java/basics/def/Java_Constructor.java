package basics.def;

class Fruit {
	public  Fruit() {
		System.out.println("Super class constructor");
		System.out.println("Super class object hashcode :" + this.hashCode());
		System.out.println(this.getClass().getName());
	}
	
	private class SubFruit{
		
	}
}


// driver class
public class Java_Constructor {
	public static void main(String[] args) {
		Fruit fr = new Fruit();
	}
}
