package basics.def;


class A {
	public void method() {
		System.out.println("A method");
	}
}

class B extends A {
	public void method() {
		System.out.println("B method");
	}
}

public class RunTimeBinding {
	public static void main(String[] args) {
		A a = new A();
		A aa = new B();
		B bb = new B();
		
		a.method();
		aa.method();
		bb.method();
	}
}
