/*

8 -> Binary Search — Search in Sorted Array

Question:

Given sorted array nums, return index of target or -1.
Must be O(log n).

*/

const nums = [2, 3, 5, 6, 23, 54, 65, 663];
const target = 65;

// ===== Binary Search ===== // T -> O(log n) & S -> O(1) => Recommended

const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

console.log(search(nums, target)); // Output: 6
