/*

2 -> Hashing — Contains Duplicate

Question:

Given an integer array nums, return true if any value appears at least twice.

*/

const nums = [23, 54, 65, 34, 67, 23];
const nums1 = [23, 45, 56, 234, 57];

// ===== Set ===== // T -> O(n) & S -> O(n) => Recommended

const containsDuplicateSet = function (nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
};

console.log(containsDuplicateSet(nums)); // Output: true
