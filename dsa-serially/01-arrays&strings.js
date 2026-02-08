/*

1 -> Arrays & Strings — Two Sum

Question:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Exactly one solution exists, and you may not use the same element twice.

Answer (Hash Map, O(n)):

*/

const twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (map.has(need)) {
      return [map.get(need), i];
    }

    map.set(nums[i], i);
    console.log(map);
  }
};

const nums = [2, 34, 6, 3, 9, 6, 7, 3];
const target = 15;

const indices = twoSum(nums, target);
console.log(indices);
