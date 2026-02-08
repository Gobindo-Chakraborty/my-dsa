/*

3 -> Recursion & Backtracking — Subsets

Question:

Given an array of unique integers nums, return all possible subsets.

Answer:

*/

var subsets = function (nums) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
};
