/*

9 -> Heap / Priority Queue — Kth Largest

Question:

Return the kth largest element in the array.

Answer (sorting version):

*/

var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
