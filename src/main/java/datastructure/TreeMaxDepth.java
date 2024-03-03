package datastructure;

public class TreeMaxDepth {

    Node n1 = new Node(40);
    Node n2 = new Node(20);
    Node n3 = new Node(10);
    Node n4 = new Node(30);
    Node n5 = new Node(60);
    Node n6 = new Node(50);
    Node n7 = new Node(70);

    public static void main(String[] args) {
        TreeMaxDepth tree = new TreeMaxDepth();
        Node node = tree.createBinaryTree();
        System.out.println("max depth : " + tree.getMaxDepth(node));
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

    public int getMaxDepth(Node root) {
        if (root == null)
            return 0;
        int left = getMaxDepth(root.left);
        int right = getMaxDepth(root.right);
        return Math.max(left, right) + 1;
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
