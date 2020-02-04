// example of bolding: <b>sdfalkha</b>asdfasdf

// inputString: the text we're working with
// substrings: an array of substrings that we are looking to make bold in the inputString
// Output: string with target substings bolded

// ex inputString = "abcdefghi"
// ex subStrings = ["abcdefg", "bcdefghi"]
// ex output = "<b>abcdefghi</b>"

// char = a
// subString = "ab"

// inputString == "abcd"
// small ex : ["bcd", "ab"]

// main method: iterate through inputString
// once inputString comes across a letter that begins one of the substrings

function findSubStrings(inputString, subStrings) {
  let bolding = new Array(inputString.length).fill(false);
  let output = "";

  for (let i = 0; i < inputString.length; i++) {

    for (let j = 0; j < subStrings.length; j++) {
      let subString = subStrings[j];

      if (subString === inputString.slice(i, i + subString.length)) {
        //YOU HIT A SUBSTRING
        for (let k = i; k < (i + subString.length); k++) {
          bolding[k] = true;
        }
      }
    }
  }


  for (let i = 0; i < bolding.length; i++) {
    let curr = bolding[i];
    let prev = bolding[i - 1];

    if (bolding[i]) {
      if (!bolding[i - 1]) {
        output += "<b>";
      }
    } else {
      if (bolding[i - 1]) {
        output += "</b>";
      }
    }
    output += inputString[i];
  }

  if (bolding[bolding.length - 1]) {
    output += "</b>";
  }
  return output;
}

// let inputString = "abcd";
// let subStrings = ["bcd", "ab"];

let inputString = "abcdefghi"
let subStrings = ["abcdefgx", "bcdefghi"]

// expected output = "<b>abcd</b>";
// expected output = "a<b>bcdefghi</b>"


console.log(findSubStrings(inputString, subStrings));