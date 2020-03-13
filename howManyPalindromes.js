function howManyPalindromes(s, lower, upper) {
  console.log(s);
  console.log(lower);
  console.log(upper);
  let memo = {};
  let counter = [];

  for (let i = 0; i < lower.length; i++) {
    let low = lower[i];
    let high = upper[i];

    let currCounter = 0;

    for (let j = low; j <= high; j++) {
      let len = j;

      if (memo[len]) {
        currCounter += memo[len];
      } else {
        let lenCounter = 0;

        for (let k = 0; k < s.length; k++) {
          let max = (k + len) - 1;
          if (s[max]) {
            let sub = s.slice(k, k + len);

            if (isPalindrome(sub)) {
              lenCounter += 1;
            }
          }
        }

        memo[len] = lenCounter;
        currCounter += lenCounter;
      }
    }

    counter.push(currCounter);
  }

  return counter;
}

function isPalindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// let str = "nn";
// let lower = [1];
// let upper = [2];

// let str = "bxb";
// let lower = [2,1];
// let upper = [3,1];

// let str = "abcd";
// let lower = [1,1,3];
// let upper = [3,2,4];

