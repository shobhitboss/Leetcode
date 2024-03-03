package datastructure;

import java.util.*;

public class TreeAllTraversals {
    Node n1 = new Node(40);
    Node n2 = new Node(20);
    Node n3 = new Node(10);
    Node n4 = new Node(30);
    Node n5 = new Node(60);
    Node n6 = new Node(50);
    Node n7 = new Node(70);

    public static void main(String args[]) {
        TreeAllTraversals bt = new TreeAllTraversals();
        Node start = bt.createBinaryTree();
        System.out.println("########################## IN ORDER TRAVERSAL ##########################");
        bt.inOrderTraversal(start);
        System.out.println("\n########################## PRE ORDER TRAVERSAL ##########################");
        bt.preOrderTraversal(start);
        System.out.println("\n########################## POST ORDER TRAVERSAL ##########################");
        bt.postOrderTraversal(start);
        System.out.println("\n########################## LEVEL ORDER TRAVERSAL ##########################");
        System.out.println(bt.levelOrderTraversal(start).toString());
        System.out.println("\n########################## ZIGZAG LEVEL ORDER TRAVERSAL ##########################");
        System.out.println(bt.zigzagLevelOrderTraversal(start).toString());
    }

    public Node createBinaryTree() {
        Node root = n1;
        n1.left = n2;
        n1.right = n5;
        n2.left = n3;
        n2.right = n4;
        n5.left = n6;
        n5.right = n7;
        return root;
    }

    public void inOrderTraversal(Node root) {
        if (root != null) {
            System.out.print(root.data + " ");
            inOrderTraversal(root.left);
            inOrderTraversal(root.right);
        }
    }

    public void preOrderTraversal(Node root) {
        if (root != null) {
            preOrderTraversal(root.left);
            System.out.print(root.data + " ");
            preOrderTraversal(root.right);
        }
    }

    public void postOrderTraversal(Node root) {
        if (root != null) {
            postOrderTraversal(root.left);
            postOrderTraversal(root.right);
            System.out.print(root.data + " ");
        }
    }

    public List<List<Integer>> levelOrderTraversal(Node root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null)
            return result;
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            System.out.println("size of queue : " + size);
            List<Integer> currentLevel = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                Node currNode = queue.remove();
                currentLevel.add(currNode.data);
                if (currNode.left != null)
                    queue.add(currNode.left);
                if (currNode.right != null)
                    queue.add(currNode.right);
            }
            result.add(currentLevel);
        }
        return result;
    }

    public List<List<Integer>> zigzagLevelOrderTraversal(Node root) {
        boolean flag = true;
        List<List<Integer>> result = new ArrayList<>();
        if (root == null)
            return result;
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            System.out.println("size of queue : " + size);
            List<Integer> currentLevel = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                Node currNode = queue.remove();
                currentLevel.add(currNode.data);
                if (currNode.left != null)
                    queue.add(currNode.left);
                if (currNode.right != null)
                    queue.add(currNode.right);
            }
            if (flag == true) {
                result.add(currentLevel);
                flag = false;
            } else if (flag == false) {
                Collections.reverse(currentLevel);
                result.add(currentLevel);
                flag = true;
            }
        }
        return result;
    }

    private class Node {
        int data;
        Node left;
        Node right;

        private Node(int data) {
            this.data = data;
        }
    }
}
