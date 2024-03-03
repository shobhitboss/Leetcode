package datastructure;

public class linklist {

    Node head;
    Node tail;

    public void addNode(int val) {
        Node newNode = new Node(10);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }

    }

    class Node {
        private final int val;
        private Node next;

        public Node(int val) {
            this.val = val;
            this.next = null;
        }
    }

}
