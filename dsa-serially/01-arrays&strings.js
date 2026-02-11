/*

1 -> Arrays & Strings — Two Sum

Question:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Exactly one solution exists, and you may not use the same element twice.

*/

const nums = [2, 34, 6, 3, 9, 6, 7, 3];
const nums1 = [6, 9];
const target = 15;

// ============================================

// ===== Brute Force ===== // T -> O(n^2) & S -> O(1)

const twoSumBrute = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// ===== Hash Map ===== // T -> O(n) & S -> O(n) => Recommended

const twoSumHashMap = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (map.has(need)) {
      return [map.get(need), i];
    }
    map.set(nums[i], i);
  }
};

// ===== Sort + Two Pointers ===== // T -> O(n log n) & S -> O(n)

const twoSumSortAndTwoPointers = function (nums, target) {
  // store value + original index
  const arr = nums.map((value, index) => ({ value, index }));

  // sort by value
  arr.sort((a, b) => a.value - b.value);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left].value + arr[right].value;

    if (sum === target) {
      return [arr[left].index, arr[right].index];
    }

    if (sum < target) left++;
    else right--;
  }
};

console.log(twoSumBrute(nums, target));
console.log(twoSumHashMap(nums, target));
console.log(twoSumSortAndTwoPointers(nums, target));
