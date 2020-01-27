/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) return false;

  let reversedDigits = [];

  while (x >= 10) {
    reversedDigits.push(x % 10);
    Math.floor(x /= 10);
  }

  let start = 0;
  let end = reversedDigits.length;

  while (start < end) {
    console.log(start);
    console.log(end);
    if (reversedDigits[start] !== reversedDigits[end]) {
      return false;
    }

    start += 1;
    end -= 1;
  }

  return true;
};




// const isPalindrome = function (x) {
//   if (x < 0) return false;

//   let reversedDigits = [];

//   while (x >= 10) {
//     reversedDigits.push(x % 10);
//     Math.floor(x /= 10);
//   }

//   let start = 0;
//   let end = reversedDigits.length;

//   while (start < end) {
//     console.log(start);
//     console.log(end);
//     if (reversedDigits[start] !== reversedDigits[end]) {
//       return false;
//     }

//     start += 1;
//     end -= 1;
//   }

//   return true;
// };



console.log(isPalindrome(121));