/*

6 -> Trees — Maximum Depth

Question:

Return the maximum depth of a binary tree.

Answer:

*/

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
