// Given an array nums of n integers, are there elements a, b, c in nums such that
//  a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.
//   Note:

// The solution set must not contain duplicate triplets.

//   Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],
//   A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let subs = [];
  let passed = [];

  for (let i = 0; i < nums.length; i++) {
    let curr1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let curr2 = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        let curr3 = nums[k];

        if (curr1 + curr2 + curr3 === 0) {
          let option = {};
          option[nums[i]] = 1;
          option[nums[j]] = 1;
          option[nums[k]] = 1;

          let done = false;

          for (let l = 0; l < passed.length; l++) {
            console.log(option);
            console.log(passed[l]);
            if (option === passed[l]) {
              done = true;
            }
          }
          if (!done) {
            console.log(passed);
            passed.push(option);
            // passed.push({[curr1] : 1, [curr2]: 1,[curr3]: 1});
            subs.push([curr1, curr2, curr3]);
          }
        }
      }
    }
  }

  return subs;
};