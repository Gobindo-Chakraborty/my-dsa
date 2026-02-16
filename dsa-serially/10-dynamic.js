/*

10 -> Dynamic Programming — Climbing Stairs

Question:

You can climb 1 or 2 steps.
How many distinct ways to reach step n?

*/

// ===== Dynamic Programming ===== // T -> O(n) & S -> O(1) => Recommended

const climbStairs = function (n) {
  if (n <= 2) return n;

  let a = 1;
  let b = 2;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

console.log(climbStairs(5));
