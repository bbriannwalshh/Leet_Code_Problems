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

