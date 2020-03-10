/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  debugger
  s = s.split(" ");
  let noSpaces = [];
  for (let i = 0; i < s.length; i++) {
    let ele = s[i];
    if (ele !== " " && ele.length) {
      noSpaces.push(ele);
    }
  }

  console.log(noSpaces);
  noSpaces.reverse();
  return noSpaces.join(" ");
};

let str = "  hello world!  ";

console.log(reverseWords(str));