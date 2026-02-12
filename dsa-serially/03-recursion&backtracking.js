/*

3 -> Recursion & Backtracking — Subsets

Question:

Given an array of unique integers nums, return all possible subsets.

Answer:

*/

const nums = [1, 2, 3];

// ===== Recursion & Backtracking ===== // T -> O(n 2^n) & S -> O(n) => Recommended

const subsetsBacktracking = function (nums) {
  const result = [];

  function backtrack(start, arr) {
    result.push([...arr]);

    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i]);

      backtrack(i + 1, arr);

      arr.pop(i);
    }
  }

  backtrack(0, []);

  return result;
};

console.log(subsetsBacktracking(nums));
