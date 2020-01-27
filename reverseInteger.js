// Given a 32 - bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

const reverse = function (x) {
  let str = x.toString();
  console.log(str);

  if (str[0] === "-") {
    str = str.slice(1);
    str = str.split("");
    str = str.reverse();
    str.unshift("-");
    str = str.join("");
  } else {
    str = str.split("");
    str = str.reverse();
    str = str.join("");
  }
  let num = Number(str);
  let max = Math.pow(2, 31) - 1;
  let min = -Math.pow(2, 31);

  if (num > max || num < min) {
    return 0;
  } else {
    return num;
  }
};

