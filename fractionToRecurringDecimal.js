/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  let decimal = String(numerator / denominator);
  decimal = decimal.split("");

  let previousCounter = 0;
  let idx = 0;
  let repeating = false;

  for (let i = 1; i < decimal.length; i++) {
    if (previousCounter > 5) {
      break;
    }
    let prev = decimal[i - 1];
    let ele = decimal[i];
    if (prev === ele) {
      if (!previousCounter) {
        repeating = true;
        idx = i;

      }
      previousCounter += 1;
    } else {
      previousCounter = 0;
    }
  }

  if (repeating) {
    let prevIdx = idx - 1;
    let nextIdx = idx + 1;
    decimal[prevIdx] = "(";
    decimal[nextIdx] = ")";
    decimal = decimal.slice(0, idx + 2);
  }

  return decimal.join("");
};