/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (!head.next || m === n) return head;
  let result = head;
  let curr = head;
  let pos = 1;
  let next = true;
  let prev = null;
  let lastForward = null;
  let start = null;

  while (pos <= n && next) {
    if (pos === m) {
      prev = curr;
      curr = prev.next;
      start = prev;

      if (curr.next) {
        next = curr.next;
      } else {
        next = null;
      }
    } else if (pos > m) {
      curr.next = prev;
      prev = curr;
      curr = next;

      if (curr.next) {
        next = curr.next;
      } else {
        next = null;
      }

    } else {
      lastForward = curr;
      curr = lastForward.next;
    }

    pos++;
  }

  start.next = curr;
  if (lastForward) {
    lastForward.next = prev;
  }
  curr.next = next;

  return result;
};