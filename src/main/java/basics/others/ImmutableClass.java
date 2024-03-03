package basics.others;

public final class ImmutableClass {

	private final int id;
	private final String name;

	public ImmutableClass(int id, String name) {
		this.name = name;
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public static void main(String args[]) {
		String str = "this";
		String str2 = "this";
		ImmutableClass cls = new ImmutableClass(10, "Shobhit");
		ImmutableClass cls2 = new ImmutableClass(10, "Shobhit");
		System.out.println(cls.hashCode());
		System.out.println(cls2.hashCode());
		System.out.println(cls.equals(cls2));
		System.out.println(cls == cls2);
		System.out.println(str.hashCode());
		System.out.println(str2.hashCode());
		System.out.println(str.equals(str2));

	}
}
