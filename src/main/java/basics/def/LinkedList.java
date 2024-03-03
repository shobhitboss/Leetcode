package basics.def;

public class LinkedList {

	class Node {
		int val;
		Node next;

		public Node(int val) {
			this.val = val;
			this.next = null;
		}
	}

	Node root;
	Node tail;

	public LinkedList() {
		root = null;
	}

	public Node addNode(int val) {
		Node add = new Node(val);
		if (root == null) {
			root = add;
			return root;
		} else {
			Node temp = root;
			while (temp.next != null)
				temp = temp.next;
			temp.next = add;
		}
		return root;
	}

	public void printList() {
		if (root == null)
			return;
		Node temp = root;
		while (temp != null) {
			System.out.print(temp.val + " ");
			temp = temp.next;
		}
	}

	public Node reverseList(Node root) {
		if (root == null)
			return root;
		Node prev = null;
		Node current = root;
		Node next = null;

		while (current != null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		return prev;
	}

	public static void main(String[] args) {
		LinkedList ll = new LinkedList();
		ll.addNode(4);
		ll.addNode(5);
		ll.addNode(6);
		ll.addNode(7);
		ll.root = ll.reverseList(ll.root);
		ll.printList();

	}

}
