/*

2 -> Hashing — Contains Duplicate

Question:

Given an integer array nums, return true if any value appears at least twice.

*/

// ===== Set ===== // T -> O(n) & S -> O(n) => Recommended

const containsDuplicateSet = function (nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
};

console.log(containsDuplicate(nums));
console.log(containsDuplicateSet(nums));
