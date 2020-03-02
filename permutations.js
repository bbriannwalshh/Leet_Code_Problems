/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (Number.isInteger(nums)) {
    return [[nums]];
  } else if (nums.length === 1) {
    return [nums];
  }
  let perms = [];

  for (let i = 0; i < nums.length; i++) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    let subPerms = permute(nums.slice(1));

    for (let j = 0; j < subPerms.length; j++) {
      if (Number.isInteger(subPerms[j])) {
        subPerms[j] = [nums[0], subPerms[j]];
      } else {
        subPerms[j].unshift(nums[0]);
      }
    }
    perms = perms.concat(subPerms);
  }

  return perms;
};