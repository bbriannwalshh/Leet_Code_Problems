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
    i++;
    j--;
  }

  return true;
}

function palindromeChecker(s, startIndex, endIndex, subs) {
  let submit = "";

  for (let i = 0; i < startIndex.length; i++) {
    let start = startIndex[i];
    let end = endIndex[i];
    let sub = subs[i];

    let str = s.slice(start, end + 1);

    let pal;
    if (isPalindrome(str, sub)) {
      pal = "1";
    } else {
      pal = "0";
    }

    submit = submit.concat(pal);
  }

  return submit;
}

let string = "bcba";
let startIdx = [1,2,1];
let endIdx = [3,3,1];
let subs = [2,0,0];

console.log(palindromeChecker(string, startIdx, endIdx, subs));

// example 2
// let string2 = "yczuykvelbobvfnjtfuqxxdnssuqevucxvwxgtetuuurzjaspvkounbpgyfmtboswmrcfvvzprqqbsksnvgkikzqigcdhqvdeoijkdkbxasyveskzyuiitaszdvgvsmchulrzwuwym"

// let startIdx = 
// [2, 64, 7, 33, 20, 3, 32, 4, 15, 6, 
// 69, 5, 39, 16, 6, 54, 45, 30, 1, 39, 
// 124, 29, 20, 45, 1, 25, 26, 110, 89, 75, 
// 53, 21, 22, 18, 44, 39, 47, 2, 46, 4, 
// 7, 22, 37, 83, 94, 87, 34, 79, 76, 3, 
// 60, 82, 47, 5, 40, 40, 21, 112, 42, 32, 
// 2, 131, 46, 67, 54, 48, 42, 74, 21, 54, 
// 21, 32, 118, 16, 76, 75, 95, 71, 20, 51, 
// 54, 88, 79, 72, 51, 53, 69, 22, 16, 29, 
// 55, 11, 1, 68, 61, 23, 49, 119, 76, 111, ... 60 more items];

// let endIdx = 


// my Output (160 characters): 
// 0101110000 
// 1001100010 
// 0001011110 
// 1000000000
// 0000010010
// 0000000001
// 0100101001
// 1110110001
// 0000001000
// 1000000001
// 0001000110
// 0011000010
// 1010101100
// 0010010001
// 0000001000
// 0010010000