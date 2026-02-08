/*

5 -> Stack — Valid Parentheses

Question:

Given a string containing ()[]{}, determine if it is valid.

Answer:

*/

var isValid = function (s) {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };

  for (let ch of s) {
    if (ch in map) {
      if (stack.pop() !== map[ch]) return false;
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
};
