/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let keys1 = {};

  for (let i = 0; i < nums1.length; i++) {
    let ele = nums1[i];

    if (!keys1[ele]) {
      keys1[ele] = true;
    }
  }

  let intersection = [];

  for (let i = 0; i < nums2.length; i++) {
    let ele = nums2[i];

    if (keys1[ele]) {
      intersection.push(ele);
      keys1[ele] = false;
    }
  }

  return intersection;
};