/*

4 -> Linked List — Reverse Linked List

Question:

Given the head of a singly linked list, reverse it.

Answer:

*/

var reverseList = function (head) {
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
