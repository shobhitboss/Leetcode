package datastructure;

public class ArrayToBST {

	public static class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;

		public TreeNode() {
		}

		public TreeNode(int val) {
			this.val = val;
			this.left = this.right = null;
		}

		public TreeNode(int val, TreeNode left, TreeNode right) {
			this.val = val;
			this.left = left;
			this.right = right;
		}
	}

	public static TreeNode arrayToBST(int[] nums) {
		TreeNode head = null;
		if (nums == null || nums.length == 0)
			return head;
		return createBST(nums, 0, nums.length - 1);
	}

	public static TreeNode createBST(int[] nums, int left, int right) {
		if (left > right)
			return null;
		int mid = left + (right - left) / 2;
		TreeNode current = new TreeNode(nums[mid]);
		current.left = createBST(nums, left, mid - 1);
		current.right = createBST(nums, mid + 1, right);
		return current;
	}

	public static void inOrderTraversal(TreeNode root) {
		if (root != null) {
			System.out.print(root.val + " ");
			inOrderTraversal(root.left);
			inOrderTraversal(root.right);
		}
	}

	public static void main(String[] args) {
		int[] arr = { -7, -5, -4, -3, -1, 0, 1, 3, 4, 5, 7 };
		TreeNode node = arrayToBST(arr);
		inOrderTraversal(node);
	}

}
