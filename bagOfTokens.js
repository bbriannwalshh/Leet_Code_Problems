/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function (tokens, P) {
  let sorted = tokens.sort((a, b) => a - b);
  let output = 0;

  while (sorted.length) {
    let start = sorted[0];

    if (start <= P) {
      sorted.shift();
      P -= start;
      output += 1;
    } else {
      if (output > 0 && sorted.length >= 2) {
        let newPower = sorted.pop();
        P += newPower;
        output -= 1;
      } else {
        return output;
      }
    }
  }

  return output;
};