/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Arr = [];
  let l2Arr = [];

  let node1 = l1;
  let node2 = l2;

  while (node1) {
    l1Arr.push(node1.val);
    node1 = node1.next;
  }

  while (node2) {
    l2Arr.push(node2.val);
    node2 = node2.next;
  }

  let combined = [];
  let remainder = null;

  while (l1Arr.length || l2Arr.length) {
    let ele1 = l1Arr.length ? l1Arr.pop() : 0;
    let ele2 = l2Arr.length ? l2Arr.pop() : 0;
    let remain = remainder ? remainder : 0;

    let added = ele1 + ele2 + remain;

    if (added < 10) {
      combined.push(added);
      remainder = null;
    } else {
      combined.push(added % 10);
      remainder = Math.floor(added / 10);
    }
  }

  remainder ? combined.push(remainder) : null;

  let val = combined.pop();
  let head = new ListNode(val);
  let curr = head;
  let newNode;

  while (combined.length) {
    val = combined.pop();
    newNode = new ListNode(val);
    curr.next = newNode;
    curr = newNode;
  }

  return head;
};