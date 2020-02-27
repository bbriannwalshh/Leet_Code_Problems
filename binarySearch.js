/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (array, ele) {
  if (array.length === 0) return -1;
  if (array.length === 1) {
    if (array[0] === ele) {
      return 0;
    } else {
      return -1;
    }
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid + 1);

  if (array[mid] === ele) {
    return mid;
  } else if (array[mid] > ele) {
    if (left) {
      let searched = search(left, ele);
      if (searched === -1) {
        return -1;
      } else {
        return searched;
      }
    } else {
      return -1;
    }

  } else if (array[mid] < ele) {
    if (right) {
      let searched = search(right, ele);

      if (searched === -1) {
        return -1;
      } else {
        return mid + 1 + searched;
      }
    } else {
      return -1;
    }
  }
};