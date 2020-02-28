// Given an array of sales numbers, find the index of the smallest array element 
// (the pivot) for which the sums of all elements to the left & to the right are equal 

/*
 * Complete the 'balancedSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY sales as parameter.
 */

function balancedSum(sales) {
  // Write your code here
  let forward = new Array(sales.length).fill(0);
  forward[0] = sales[0];
  let backward = new Array(sales.length).fill(0);
  backward[backward.length - 1] = sales[sales.length - 1];

  for (let i = 1; i < sales.length; i++) {
    let prev = forward[i - 1];
    forward[i] = prev + sales[i];
  }

  for (let i = sales.length - 2; i >= 0; i--) {
    let prev = backward[i + 1];
    backward[i] = prev + sales[i];
  }

  for (let i = 0; i < sales.length; i++) {
    let currForward = forward[i];
    let currBackward = backward[i];

    if (currForward === currBackward) return i;
  }
}

function main() {