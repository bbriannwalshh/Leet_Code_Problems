/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let previous = nums[0];
  let max = previous;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= 0) {
      if (previous <= 0) {
        previous = nums[i];
      } else {
        previous = nums[i] + previous;
      }
    } else {
      if (previous >= 0 && nums[i] + previous > 0) {
        previous = nums[i] + previous;
      } else {
        previous = nums[i];
      }
    }

    if (previous > max) {
      max = previous;
    }
  }


  return max;
};