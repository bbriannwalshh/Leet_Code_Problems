/*
 * Complete the 'lastStoneWeight' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY weights as parameter.
 */

function lastStoneWeight(weights) {
  weights.sort((a, b) => a - b);
  // Write your code here

  while (weights.length > 1) {
    let max = weights.pop();
    let second = weights.pop();

    if (max > second) {
      max = max - second;
      weights.push(max);
    }

    let last = weights.length - 1;
    let curr = weights.length - 2;
    let sorted = false;

    while (!sorted) {
      if (weights[last] < weights[curr]) {
        [weights[last], weights[curr]] = [weights[curr], weights[last]];
        last -= 1;
        curr -= 1;
      } else {
        sorted = true;
      }
    }
  }

  if (weights.length === 1) {
    return weights[0];
  } else {
    return 0;
  }
}