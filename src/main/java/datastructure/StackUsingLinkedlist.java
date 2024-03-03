package datastructure;

public class StackUsingLinkedlist {

	class Node {
		int value;
		Node next;
	}

	Node head = null;

	public void push(int num) {
		Node extraHead = head;
		head = new Node();
		head.value = num;
		head.next = extraHead;
		System.out.println(num + " pushed in Stack");
	}

	public int pop() {
		if (head == null) {
			System.out.println("Stack is empty");
			return 0;
		} else {
			int num = head.value;
			head = head.next;
			System.out.println(num + " is popped");
			return num;
		}
	}

	public void printList(Node pointer) {
		if (pointer == null)
			System.out.println("Stack is empty");
		while (head != null) {
			System.out.print(head.value + " ");
			head = head.next;
		}
	}

	public static void main(String[] args) {
		StackUsingLinkedlist stack = new StackUsingLinkedlist();
		System.out.println(stack.pop());
		stack.push(10);
		stack.push(20);
		stack.push(30);
		stack.push(70);
		stack.push(80);
		System.out.println(stack.pop());
		System.out.println(stack.pop());
		stack.printList(stack.head);
	}
}
