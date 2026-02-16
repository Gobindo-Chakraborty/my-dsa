/*

9 -> Heap / Priority Queue — Kth Largest

Question:

Return the kth largest element in the array.

*/

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;

// ===== Sorting ===== // T -> O(n log n) & S -> O(n) => Recommended

const findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

console.log(findKthLargest(nums, k));
