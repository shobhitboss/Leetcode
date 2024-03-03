package datastructure;

public class StackArrray {
	private int size;
	private int arr[];
	private int top;

	public StackArrray(int size) {
		this.size = size;
		this.arr = new int[size];
		top = -1;
	}

	public boolean isEmpty() {
		return (top == -1);
	}

	public boolean isFull() {
		return (size - 1 == top);
	}

	public int peek() {
		if (!this.isEmpty())
			return arr[top];
		else {
			System.out.println("Stack is empty");
			return 0;
		}
	}

	public void push(int num) {
		top++;
		arr[top] = num;
		System.out.println(num + " added to stack");
	}

	public int pop() {
		if (!(this.top == -1)) {
			int currTop = top;
			top--;
			System.out.println(arr[currTop] + " is popped");
			return arr[currTop];
		} else {
			System.out.println("Stack is empty");
			return -1;
		}
	}

	public static void main(String[] args) {
		StackArrray stack = new StackArrray(10);
		System.out.println(stack.isEmpty());
		stack.pop();
		System.out.println(stack.isFull());
		stack.push(10);
		stack.push(20);
		stack.push(30);
		stack.push(40);
		System.out.println(stack.peek());
		stack.pop();
		System.out.println(stack.isFull());
		System.out.println(stack.peek());
	}
}
