/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = function (s, t) {
  let queue = [s];
  let subTree = false;

  while (queue.length) {
    let tempQueue = [];

    for (let i = 0; i < queue.length; i++) {
      let curr = queue[i]
      if (!curr.val) return false;
      if (curr.val === t.val && subCheck(curr, t)) subTree = true;
      if (curr.left) tempQueue.push(curr.left);
      if (curr.right) tempQueue.push(curr.right);
    }

    queue = tempQueue;
  }

  return subTree;
};

const subCheck = function (s, t) {
  let stackS = [s];
  let stackT = [t];

  while (stackT.length) {
    let sStackTemp = [];
    let tStackTemp = [];
    for (let i = 0; i < stackT.length; i++) {
      let eleS = stackS[i];
      let eleT = stackT[i];
      if (!eleS || !eleT || eleS.val !== eleT.val) return false;
      if (eleS && eleS.left) sStackTemp.push(eleS.left);
      if (eleS && eleS.right) sStackTemp.push(eleS.right);
      if (eleT && eleT.left) tStackTemp.push(eleT.left);
      if (eleT && eleT.right) tStackTemp.push(eleT.right);
    }

    stackS = sStackTemp;
    stackT = tStackTemp;
  }

  return true;
};