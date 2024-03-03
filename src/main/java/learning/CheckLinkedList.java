package learning;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CheckLinkedList {
    LinkedList root = new LinkedList();

    public static void main(String[] args) {
        CheckLinkedList emp = new CheckLinkedList();
        List<String> numbers = Arrays.asList("2", "3", "4", "4", "3", "2");
        emp.root = emp.createList(numbers);
        emp.printList(emp.root);
        System.out.println(emp.isPalindrome(emp.root));
    }

    public LinkedList createList(List<String> vals) {
        LinkedList temp = null;
        for (String val : vals) {
            LinkedList node = new LinkedList(val);
            if (temp == null) {
                temp = node;
                root = temp;
                continue;
            }
            temp.next = node;
            temp = temp.next;
        }
        return root;
    }

    public boolean isPalindrome(LinkedList first) {
        boolean res = true;
        LinkedList temp = root;
        if (first == null)
            return false;
        isPalindrome(first.next);
        if (temp.value != first.value) {
            res = false;
        }
        temp = temp.next;
        return res;
    }

    public void printList(LinkedList pnt) {
        if (pnt == null) {
            System.out.println("Empty List !");
            return;
        }
        LinkedList node = pnt;
        while (node != null) {
            System.out.println("Node val : " + node.value);
            node = node.next;
        }
    }

    class LinkedList {
        String value;
        LinkedList next;

        public LinkedList() {
        }

        public LinkedList(String value) {
            this.value = value;
            this.next = null;
        }
    }
}
