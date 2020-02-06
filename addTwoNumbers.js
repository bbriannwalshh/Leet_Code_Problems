// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//   Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

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

const addTwoNumbers = function (l1, l2) {
  let remainder = 0;
  let left = l1;
  let leftVal;
  let right = l2;
  let rightVal;
  let start = null;
  let following;

  while (left || right) {
    if (left) {
      leftVal = left.val;
    } else {
      leftVal = 0;
    }

    if (right) {
      rightVal = right.val;
    } else {
      rightVal = 0;
    }

    let value = leftVal + rightVal + remainder;
    if (remainder) remainder = 0;

    if (!start) {
      if (value < 10) {
        start = new ListNode(value);
        following = start.next;

      } else {
        start = new ListNode(value % 10);
        remainder = Math.floor(value / 10);
        following = start.next;
      }
    } else {
      if (!following) {
        if (value < 10) {
          start.next = new ListNode(value);
          following = start.next;

        } else {
          start.next = new ListNode(value % 10);
          remainder = Math.floor(value / 10);
          following = start.next;
        }
      } else {
        if (value < 10) {
          following.next = new ListNode(value);
          following = following.next;

        } else {
          following.next = new ListNode(value % 10);
          remainder = Math.floor(value / 10);
          following = following.next;
        }
      }
    }

    if (right && right.next) {
      right = right.next;
    } else {
      right = null;
    }

    if (left && left.next) {
      left = left.next;
    } else {
      left = null;
    }
  }

  if (remainder) {
    if (!following) {
      start.next = new ListNode(remainder);
    } else {
      following.next = new ListNode(remainder);
    }
  }

  return start;
}



// Doesn't work with extremely large elements;

// const addTwoNumbers = function (l1, l2) {
//   let node = l1;
//   let input1 = 0;
//   let input2 = 0;

//   let exp = 0;

//   while (node) {
//     input1 += node.val * Math.pow(10, exp);
//     node = node.next;
//     exp += 1;
//   }

//   exp = 0;
//   node = l2;

//   while (node) {
//     input2 += node.val * Math.pow(10, exp);
//     node = node.next;
//     exp += 1;
//   }

//   console.log(input1);
//   console.log(input2);

//   let joined = input1 + input2;
//   node = l1;

//   while (joined >= 10) {
//     node.val = joined % 10;
//     joined = Math.floor(joined / 10);
//     console.log(joined);

//     if (!node.next) {
//       node.next = l2;
//       node = node.next;
//     } else {
//       node = node.next;
//     }
//   }

//   node.val = joined;
//   node.next = null;

//   return l1;
// };

// const 