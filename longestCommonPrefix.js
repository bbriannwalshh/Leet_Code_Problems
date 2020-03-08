/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  if (strs.length === 1) return strs[0];
  let prefix = "";
  let common = true;
  let allEmpty = false;
  let roundOne = true;

  while (common) {
    for (let i = 0; i < strs.length; i++) {
      let str = strs[i];
      let char = str[0];

      if (!char) {
        if (roundOne) {
          return "";
        } else {
          if (i === 0) {
            return prefix;
          } else {
            prefix = prefix.slice(0, prefix.length - 1);
            return prefix;
          }
        }
      }

      strs[i] = str.slice(1);
      if (i === 0) {
        prefix = prefix.concat(char);
      } else {
        if (char !== prefix[prefix.length - 1]) {
          common = false;
        }
      }
    }

    if (roundOne) {
      roundOne = false;
    }
  }

  prefix = prefix.slice(0, prefix.length - 1);
  return prefix;
};