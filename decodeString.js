/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let converted = convertToArr(s);

  let counter;
  let result = "";

  for (let i = 0; i < converted.length; i++) {
    let ele = converted[i];

    if (Number.isInteger(ele)) {
      counter = ele;
      let subStr = stack(counter, converted.slice(i + 2));
      result = result.concat(subStr[0]);
      i += subStr[1];

    } else {
      result = result.concat(ele);

    }
  }

  return result;
};

const convertToArr = function(s) {
  let converted = [];
  let nums = "1234567890";
  let bracket = "[]";

  let numTemp = null;
  let strTemp = null;

  for (let i = 0; i < s.length; i++) {
    if (nums.includes(s[i])) {
      if (strTemp) {
        converted.push(strTemp);
        strTemp = false;
      }

      if (numTemp) {
        numTemp = numTemp.concat(s[i]);
      } else {
        numTemp = s[i];
      }
    } else {
      if (numTemp) {
        converted.push(Number(numTemp));
        numTemp = false;
      }

      if (bracket.includes(s[i])) {
        if (strTemp) {
          converted.push(strTemp);
          strTemp = false;
        }
        converted.push(s[i]);
      } else {
        if (strTemp) {
          strTemp = strTemp.concat(s[i]);
        } else {
          strTemp = s[i];
        }
      }
    }
  }

  if (strTemp) converted.push(strTemp);

  return converted;
};

const stack = function (counter, str) {
  let subStr = "";
  let brackets = "[]";
  let endIdx = 1;

  for (let i = 0; i < str.length; i++) {
    let ele = str[i];

    if (brackets.includes(ele)) {
      endIdx += 1;
      break;
    } else if (Number(ele)) {
      endIdx += 1;
      let newSub = stack(ele, str.slice(i + 2));
      endIdx += newSub[1];
      i += newSub[1];
      subStr = subStr.concat(newSub[0]);
    } else {
      endIdx += 1;
      subStr = subStr.concat(ele);
    }
  }

  let final = "";

  for (let i = 0; i < counter; i++) {
    final = final.concat(subStr);
  }
  return [final, endIdx];
};