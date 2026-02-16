/*

6 -> Trees — Maximum Depth

Question:

Return the maximum depth of a binary tree.

*/

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

const root1 = {
  val: 3,
  left: null,
  right: null,
};

// ===== Tree ===== // T -> O(n) & S -> O(h) => Recommended

const maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log(maxDepth(root)); // Output: 3
