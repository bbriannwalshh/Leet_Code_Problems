/**
 * @param {number} x
 * @return {boolean}
 */


const isPalindrome = function (x) {
  if (x < 0) return false;

  let reversedDigits = [];

  while (x >= 10) {
    reversedDigits.push(x % 10);
    x = Math.floor(x /= 10);
  }

  reversedDigits.push(x);
  let start = 0;
  let end = reversedDigits.length - 1;

  while (start < end) {

    if (reversedDigits[start] !== reversedDigits[end]) {
      return false;
    }

    start += 1;
    end -= 1;
  }

  return true;
};



console.log(isPalindrome(121));