const isHappy = function (n, past = null) {
  if (n === 1) return true
  if (past && past.includes(n)) return false;
  let vars = [];
  let digit;

  while (n >= 10) {
    digit = n % 10;
    vars.push(digit);
    n = Math.floor(n / 10);
  }

  vars.push(n);
  let sum = 0;
  let num;

  for (let i = 0; i < vars.length; i++) {
    num = vars[i] * vars[i];
    sum += num;
  }

  if (!past)  {
    past = [n];
  } else {
    past.push(n);
  }

  return isHappy(sum, past);
};

num = 19;

console.log(isHappy(num));