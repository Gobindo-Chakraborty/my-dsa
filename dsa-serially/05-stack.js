/*

5 -> Stack — Valid Parentheses

Question:

Given a string containing ()[]{}, determine if it is valid.

*/

const str = "()[{}]";

// ===== Stack ===== // T -> O(n) & S -> O(n) => Recommended

const isValid = function (s) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };

  for (let ch of s) {
    if (ch in map) {
      if (stack.pop() !== map[ch]) return false;
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
};

console.log(isValid(str)); // Output: true
