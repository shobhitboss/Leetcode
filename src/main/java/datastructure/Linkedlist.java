package datastructure;

public class Linkedlist {

    Node head = null;
    Node last = null;

    public static void main(String[] args) {
        Linkedlist list = new Linkedlist();
        list.deleteNode(20);
        list.addNode(10);
        list.addNode(20);
        list.addNode(30);
        list.addNode(40);
        list.addNode(50);
        list.addNode(60);
        list.addNode(70);

        list.printList(list.head);
        list.head = list.reverseList(list.head);
        System.out.println("\n");
        list.printList(list.head);
        list.deleteNode(10);
        System.out.println("\n");
        list.printList(list.head);
        System.out.println(list.isPalindrome(list.head));
    }

    public void addNode(int val) {
        Node node = new Node(val);
        if (head == null) {
            head = node;
            last = node;
        } else {
            last.next = node;
            last = node;
        }
    }

    public void printList(Node node) {
        Node temp = node;
        if (temp != null) {
            while (temp != null) {
                System.out.print(temp.val + " ");
                temp = temp.next;
            }
        }
    }

    public boolean isPalindrome(Node node) {
        Node slow = head;
        Node fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        slow = reverseList(slow);
        fast = head;

        while (slow != null) {
            if (slow.val != fast.val)
                return false;
            slow = slow.next;
            fast = fast.next;
        }
        return true;
    }

    public void deleteNode(int nodeVal) {
        if (head == null)
            System.out.println("List is empty, can not perform delete. Please add elements in list");
        if (head != null && head.val == nodeVal) {
            head = head.next;
            return;
        }
        Node temp = head;
        Node prev = null;
        while (temp != null && temp.val != nodeVal) {
            prev = temp;
            temp = temp.next;
        }
        if (temp == null)
            return;
        prev.next = temp.next;
    }

    public Node reverseList(Node node) {
        Node prev = null;
        Node current = node;
        Node next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }

    public class Node {
        int val;
        Node next;

        public Node(int val) {
            this.val = val;
            this.next = null;
        }
    }
}
