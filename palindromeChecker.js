/*
 * Complete the 'palindromeChecker' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndex
 *  3. INTEGER_ARRAY endIndex
 *  4. INTEGER_ARRAY subs
 */

const isPalindrome = function (str, sub) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      if (sub > 0) {
        sub -= 1;
      } else {
        return false;
      }
    }
    i++
    j--
  }

  return true;
}

function palindromeChecker(s, startIndex, endIndex, subs) {
  // Write your code here
  let submit = "";

  for (let i = 0; i < startIndex.length; i++) {
    let start = startIndex[i];
    let end = endIndex[i];
    let sub = subs[i];

    let str = s.slice(start, end + 1);
    console.log(str);
    console.log(sub);

    let pal;
    if (isPalindrome(str, sub)) {
      pal = "1";
    } else {
      pal = "0"
    }
    console.log(pal);
    submit = submit.concat(pal);
  }

  return submit;
}

let string = "bcba";
let startIdx = [1,2,1];
let endIdx = [3,3,1];
let subs = [2,0,0];

console.log(palindromeChecker(string, startIdx, endIdx, subs));