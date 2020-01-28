// Implement pow(x, n), which calculates x raised to the power n (xn).

// Example 1:

// Input: 2.00000, 10
// Output: 1024.00000

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  //     if (n === 1) return x

  //     return x * myPow(x, n - 1);
  if (x === 1) {
    return 1;
  } else if (x === -1) {
    if (n % 2 === 0) {
      return 1;
    } else {
      return -1;
    }
  }


  let result = 1;

  if (n > 0) {
    while (n >= 1) {
      result *= x;
      n -= 1;
    }
  } else if (n < 0) {
    while (n <= -1) {
      result *= 1 / x;
      n += 1;
    }
  } else {
    return 1;
  }

  return result;
};