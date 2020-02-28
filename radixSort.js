const getDigitFrom = function(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const getIntLength = function(num) {
  let counter = 0;

  while (num % 10 !== num) {
    counter += 1;
    num = Math.floor(num / 10);
  }

  return counter += 1;
};