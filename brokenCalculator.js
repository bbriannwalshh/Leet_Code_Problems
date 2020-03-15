/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function (X, Y) {
  let curr = Y;
  let counter = 0;

  while (curr > X) {
    if (curr % 2 === 0) {
      curr /= 2;
    } else {
      curr += 1;
    }

    counter++;
  }

  return counter + X - curr;
};