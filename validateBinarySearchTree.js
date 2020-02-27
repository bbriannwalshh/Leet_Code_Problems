/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return validate(root, null, null)
};

const validate = function (root, max, min) {
  if (root) {
    let left = root.left;
    let right = root.right;
    let val = root.val;


    if (left) {
      if (left.val < val) {
        if (min) {
          if (left.val > min) {
            if (!validate(left, root.val, min)) {
              return false;
            }
          } else {
            return false;
          }
        } else {
          if (!validate(left, root.val, min)) {
            return false;
          }
        }
      } else {
        return false;
      }
    }

    if (right) {
      if (right.val > val) {
        if (max) {
          if (right.val < max) {
            if (!validate(right, max, root.val)) {
              return false;
            }
          } else {
            return false;
          }
        } else {
          if (!validate(right, max, root.val)) {
            return false;
          }
        }
      } else {
        return false;
      }
    }
  }

  return true;
}


