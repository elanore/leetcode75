function maxDepth(root) {
  if (root === null) {
    return 0; // If the tree is empty, the depth is 0
  }

  // Recursively find the depth of left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // The maximum depth is the greater depth between the two, plus one for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
// Definition of a TreeNode
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

// Construct the tree: [3,9,20,null,null,15,7]
const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(maxDepth(root)); // Output: 3
