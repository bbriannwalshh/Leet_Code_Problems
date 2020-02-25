/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowest = prices[0];
  let maxDiff = 0;

  for (let i = 1; i < prices.length; i++) {
    let ele = prices[i];
    if (ele < lowest) {
      lowest = ele;
    } else {
      let diff = ele - lowest;
      if (diff > maxDiff) maxDiff = diff;
    }
  }

  return maxDiff;
};