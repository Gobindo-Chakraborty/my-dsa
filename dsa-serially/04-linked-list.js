/*

4 -> Linked List — Reverse Linked List

Question:

Given the head of a singly linked list, reverse it.

*/

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};

// ===== Linked List ===== // T -> O(n) & S -> O(1) => Recommended

const reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

console.log(reverseList(head));
