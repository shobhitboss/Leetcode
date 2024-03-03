package org.example;


import org.w3c.dom.Node;

public class TempClass {
    public static void main(String[] args) {
        Linkedlist li = new Linkedlist();
        li.addNode(1);
        li.addNode(2);
        li.addNode(3);
        li.addNode(4);
        li.addNode(5);
        li.addNode(6);
        li.printList();
    }


    static class Linkedlist {
        Node head = null;

        public void addNode(int nodeVal) {
            Node newNode = new Node(nodeVal, null);
            if (head == null) {
                head = newNode;
            } else {
                Node tempNode = head;
                while (tempNode.next != null) {
                    tempNode = tempNode.next;
                }
                tempNode.next = newNode;
            }
        }

        public void printList() {
            Node tempNode = head;
            while (tempNode != null) {
                System.out.print(tempNode.value + " ");
                tempNode = tempNode.next;
            }
        }

        class Node {
            int value;
            Node next;

            Node(int val, Node next) {
                value = val;
                next = this.next;
            }
        }
    }
}
