/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function (tokens, P) {
  let sorted = tokens.sort((a, b) => a - b);
  let output = 0;

  while (tokens.length) {
    let start = tokens[0];

    if (start <= P) {
      tokens.shift();
      P -= start;
      output += 1;
    } else {
      if (output > 0 && tokens.length >= 2) {
        let newPower = tokens.pop();
        P += newPower;
        output -= 1;
      } else {
        return output;
      }
    }
  }

  return output;
};