// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

// Helper function to get leaf values of a tree
function getLeafValues(root) {
  const leaves = [];

  function traverse(node) {
    if (!node) return;
    if (!node.left && !node.right) {
      leaves.push(node.val);
    }
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return leaves;
}

// Main function to check if two trees are leaf-similar
var leafSimilar = function (root1, root2) {
  const leaves1 = getLeafValues(root1);
  const leaves2 = getLeafValues(root2);

  // Compare the two leaf sequences
  return (
    leaves1.length === leaves2.length &&
    leaves1.map((val, idx) => val === leaves2[idx]).every(Boolean)
  );
};

// Example usage
const root1 = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(1, new TreeNode(9), new TreeNode(8))
);

const root2 = new TreeNode(
  3,
  new TreeNode(5, new TreeNode(6), new TreeNode(7)),
  new TreeNode(
    1,
    new TreeNode(4),
    new TreeNode(2, new TreeNode(9), new TreeNode(8))
  )
);

console.log(leafSimilar(root1, root2)); // Output: true
