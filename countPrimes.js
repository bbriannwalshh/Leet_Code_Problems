/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
  if (n <= 2) return false;
  let counter = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      counter++;
    }
  }

  return counter;
};

var isPrime = function (n) {
  let factor = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= factor; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}