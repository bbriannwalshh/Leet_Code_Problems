/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let noSpaces = [];
  let temp = null;

  for (let i = 0; i < s.length; i++) {
    let ele = s[i];

    if (ele === " ") {
      if (temp) {
        noSpaces.push(temp);
        temp = null;
      }
    } else {
      if (temp) {
        temp = temp.concat(ele);
      } else {
        temp = ele;
      }
    }
  }

  if (temp) {
    noSpaces.push(temp);
  }

  let reversed = "";

  for (let i = noSpaces.length - 1; i >= 0; i--) {
    let ele = noSpaces[i];

    reversed = reversed.concat(ele);

    if (i !== 0) {
      reversed = reversed.concat(" ");
    }
  }

  return reversed;
};

let str = "  hello world!  ";

console.log(reverseWords(str));