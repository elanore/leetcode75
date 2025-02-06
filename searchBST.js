function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function searchBST(root, val) {
  if (!root) return null; // If the root is null, return null
  if (root.val === val) return root; // If the root value matches, return the root
  if (val < root.val) {
    return searchBST(root.left, val); // Search in the left subtree
  } else {
    return searchBST(root.right, val); // Search in the right subtree
  }
}

// Example usage:
// Constructing the tree: [4, 2, 7, 1, 3]
const root = new TreeNode(4);
root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(7);

const val1 = 2;
console.log(searchBST(root, val1)); // Output: TreeNode with val = 2

const val2 = 5;
console.log(searchBST(root, val2)); // Output: null
