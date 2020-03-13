// Reverse a singly linked list.

// Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;

  let prev = null;
  let curr = head;
  let forward = curr.next;

  while (forward) {
    curr.next = prev;
    prev = curr;
    curr = forward;
    if (curr.next) {
      forward = curr.next;
    } else {
      forward = null;
    }
  }

  curr.next = prev;

  return curr;
};