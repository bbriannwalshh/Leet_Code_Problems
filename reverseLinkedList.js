// Reverse a singly linked list.

// Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  let forward = curr.next;

  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = forward;
    forward = curr.next;
  }

  return prev;
}