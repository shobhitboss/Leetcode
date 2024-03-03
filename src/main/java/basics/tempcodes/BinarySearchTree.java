package basics.tempcodes;

public class BinarySearchTree {

	class Node {
		int val;
		Node left;
		Node right;

		public Node() {

		}

		public Node(int val) {
			this.val = val;
			this.left = this.right = null;
		}

		public Node(int val, Node left, Node right) {
			this.val = val;
			this.left = left;
			this.right = right;
		}
	}

	Node root;

	public BinarySearchTree() {
		root = null;
	}

	public Node addNode(Node root, int val) {
		if (root == null) {
			this.root = new Node(val);
			return root;
		} else if (val < root.val)
			root.left = addNode(root.left, val);
		else if (val > root.val)
			root.right = addNode(root.right, val);
		return root;
	}
	
	
	public static void inOrderTraversal(Node root) {
		if (root != null) {
			System.out.print(root.val + " ");
			inOrderTraversal(root.left);
			inOrderTraversal(root.right);
		}
	}
	
	public static void main(String args[]) {
		BinarySearchTree bst = new BinarySearchTree();
		bst.addNode(bst.root, 4);
		bst.addNode(bst.root, 6);
		bst.addNode(bst.root, 5);
		bst.addNode(bst.root, 3);
		bst.addNode(bst.root, 2);
		bst.addNode(bst.root, 1);
		
		inOrderTraversal(bst.root);		
	}
}
