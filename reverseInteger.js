// Given a 32 - bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

const reverse = function (x) {
  let reversedDigits = [];
  let negative;

  if (x < 0) {
    x = (x * -1)
    negative = true;
  }

  while (x >= 10) {
    reversedDigits.push(x % 10);
    x = Math.floor(x / 10);
  }

  reversedDigits.push(x);

  let exponent = 0;
  let result = 0;
  let digit;

  while (reversedDigits.length) {
    digit = reversedDigits.pop();
    result += digit * Math.pow(10, exponent);
    exponent += 1;
  }

  if (negative) {
    result *= -1;
  }
  let max = Math.pow(2, 31) - 1;
  let min = -Math.pow(2, 31);

  if (result > max || result < min) {
    return 0;
  } else {
    return result;
  }
};


// const reverse = function (x) {
//   let str = x.toString();
//   console.log(str);

//   if (str[0] === "-") {
//     str = str.slice(1);
//     str = str.split("");
//     str = str.reverse();
//     str.unshift("-");
//     str = str.join("");
//   } else {
//     str = str.split("");
//     str = str.reverse();
//     str = str.join("");
//   }
//   let num = Number(str);
//   let max = Math.pow(2, 31) - 1;
//   let min = -Math.pow(2, 31);

//   if (num > max || num < min) {
//     return 0;
//   } else {
//     return num;
//   }
// };

