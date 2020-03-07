/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let idx = null;


  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (Number.isInteger(idx)) {
        nums[idx] = nums[i];
        nums[i] = 0;
        idx += 1;
      }
    } else {
      if (!Number.isInteger(idx)) {
        idx = i;
      }
    }
  }
};