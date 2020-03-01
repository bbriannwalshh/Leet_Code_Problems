/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let remove = {
    '"': true, "{": true, "'": true, "}": true, ",": true, ".": true, ":": true, ";": true, "?": true, "!": true, " ": true, "@": true, "#": true, "-": true, "(": true, ")": true, "`": true
  };

  let string = "";
  let char;

  for (let i = 0; i < s.length; i++) {
    char = s[i];

    if (!remove[char]) {
      string += char.toLowerCase();
    }
  }

  let j = string.length - 1;
  for (let i = 0; i < Math.floor(string.length) + 1; i++) {
    let char1 = string[i];
    let char2 = string[j];

    if (char1 !== char2) {
      return false;
    }

    j--;
  }

  return true;
};