package datastructure;

public class TestHashset {

	class Node {
		int val;
		Node next;

		public Node(int val) {
			this.val = val;
			this.next = null;
		}
	}

	private int size;
	private Node[] array;

	public TestHashset() {
		this.size = 100;
		this.array = new Node[this.size];
	}

	public void addKey(int key) {
		int index = key % this.size;
		Node newNode = new Node(key);
		if (this.array[index] == null) {
			this.array[index] = newNode;
			return;
		} else {
			Node tempNode = this.array[index];
			while (tempNode != null && tempNode.val != key)
				tempNode = tempNode.next;
			if (tempNode != null)
				return;
			newNode.next = this.array[index];
			this.array[index] = newNode;
		}
	}

	public void removeKey(int key) {
		int index = key % this.size;
		if (this.array[index] == null)
			return;
		else {
			Node tempNode = this.array[index];

			if (tempNode.val == key) {
				this.array[index] = tempNode.next;
				return;
			}

			while (tempNode.next != null && tempNode.next.val != key)
				tempNode = tempNode.next;
			if (tempNode.next == null)
				return;
			tempNode.next = tempNode.next.next;
		}
	}

	public boolean contains(int key) {
		int index = key % this.size;
		if (this.array[index] == null)
			return false;
		else {
			Node tempNode = this.array[index];
			while (tempNode != null && tempNode.val != key)
				tempNode = tempNode.next;
			return tempNode != null;
		}
	}

	public static void main(String args[]) {
		TestHashset set = new TestHashset();
		set.addKey(10);
		set.addKey(20);
		set.addKey(30);
		set.addKey(40);
		set.addKey(50);
		set.addKey(60);

		set.removeKey(50);

		System.out.println(set.contains(60));
		System.out.println("this all is working");
	}
}
