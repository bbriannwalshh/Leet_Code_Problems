// const getDigitFrom = function(num, place) {
//   num = Math.abs(num);
//   let power = Math.pow(10, place);
//   num = Math.floor(num / power);

//   return num % 10;
// };

const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;;


// const getIntLength = function(num) {
//   let counter = 0;

//   while (num % 10 !== num) {
//     counter += 1;
//     num = Math.floor(num / 10);
//   }

//   return counter += 1;
// };

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;


// const getMaxDigits = function(nums) {
//   nums = nums.sort;
//   return getIntLength(nums[nums.length - 1]);
// };

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

// let num = 534;
// let place = 2;

// console.log(getDigitFrom(num, place));

function radixSort(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let maxDigits = getMaxDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []); // Array of empty arrays

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigitFrom(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }
  return arr;
}


let arr = [74,5533,757,9764,4154,167,5196,2,5638,8363,2848];

console.log(radixSort(arr));