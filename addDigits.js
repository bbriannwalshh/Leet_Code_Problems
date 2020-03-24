/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let split = [];
  let curr = num;

  while (Number.isInteger(curr)) {

    if (curr >= 10) {
      let ele = curr % 10;
      split.push(ele);
      curr = Math.floor(curr / 10);

    } else {
      let sum = split.reduce((a, b) => a + b, 0);
      sum += curr;

      if (sum >= 10) {
        split = [];
        curr = sum;
      } else {
        return sum;
      }
    }
  }
};