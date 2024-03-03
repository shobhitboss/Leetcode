package basics.def;

public class LearnBST {

	public static class Node {
		int val;
		Node left;
		Node right;

		public Node(int val) {
			this.val = val;
			this.left = this.right = null;
		}
	}

	Node root;

	public LearnBST() {
		root = null;
	}

	public void insertNode(int val) {
		addNode(root, val);
	}

	private Node addNode(Node root, int val) {
		if (root == null) {
			root = new Node(val);
			return root;
		}
		else {
			if (val < root.val)
				root.left = addNode(root.left, val);
			else
				root.right = addNode(root.right, val);
		}
		return root;
	}

	public void inOrderTraversal(Node root) {
		if (root != null) {
			System.out.print(root.val + " ");
			inOrderTraversal(root.left);
			inOrderTraversal(root.right);
		}
	}

	public static void main(String args[]) {
		LearnBST bst = new LearnBST();
		bst.insertNode(4);
		bst.insertNode(5);
		bst.inOrderTraversal(bst.root);
	}
}
