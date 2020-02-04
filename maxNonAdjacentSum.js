// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 

// function maxNonAdjacentSum(nums) {
//   let table = new Array(nums.length).fill(0);
//   table[0] = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     let skipLeftNeighbor = (table[i - 2]) === undefined ? 0 : table[i - 2];
//     let includeThisNum = skipLeftNeighbor + nums[i];
//     let notIncludingThisNum = table[i - 1];
//     table[i] = Math.max(includeThisNum, notIncludingThisNum);
//   }

//   // console.log(table);

//   return table[table.length -1];
// }

function maxNonAdjacentSum(nums, memo={}) {
  if (nums.length in memo) return memo[nums];
  if (nums.length === 0) return 0;
  
  let firstEle = nums[0];

  memo[nums.length] =  Math.max(
    firstEle + maxNonAdjacentSum(nums.slice(2)), 
    maxNonAdjacentSum(nums.slice(1))
  );

  return memo[nums.length];
}

console.log(maxNonAdjacentSum([2, 7, 9, 3, 4]) );
console.log(maxNonAdjacentSum([4,2,1,6]));