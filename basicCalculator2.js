/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let spaceless = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      spaceless.push(s[i]);
    }
  }

  let corrected = [];
  let temp = null;

  for (let i = 0; i < spaceless.length; i++) {
    let ele = spaceless[i];
    if (Number.isInteger(Number(ele))) {
      if (temp) {
        temp = temp.concat(ele);
      } else {
        temp = ele;
      }
    } else {
      corrected.push(Number(temp));
      temp = null;
      corrected.push(ele);
    }
  }

  if (temp) corrected.push(Number(temp));

  let multiDivOps = {
    "/": (ele1, ele2) => ele1 / ele2,
    "*": (ele1, ele2) => ele1 * ele2,
  };
  let addSubOps = {
    "+": (ele1, ele2) => ele1 + ele2,
    "-": (ele1, ele2) => ele1 - ele2
  };

  let multiDiv = [];
  let temp1 = false;
  let tempOp;

  for (let i = 0; i < corrected.length; i++) {
    let ele = corrected[i];

    if (multiDivOps[ele]) {
      tempOp = ele;

    } else if (addSubOps[ele]) {
      if (Number.isInteger(temp1)) {
        multiDiv.push(temp1);
        temp1 = null;
      }
      multiDiv.push(ele);

    } else {
      if (!Number.isInteger(temp1)) {
        temp1 = ele;
      } else {
        let func = multiDivOps[tempOp];

        let prod = func(temp1, ele);
        temp1 = Math.floor(prod);
        tempOp = null;
      }
    }
  }

  if (!multiDiv.length) return Number(temp1);
  let last = multiDiv[multiDiv.length - 1];
  if (multiDivOps[last] || addSubOps[last]) {
    multiDiv.push(temp1);
  }

  let final = multiDiv[0];
  console.log(multiDiv);


  for (let i = 1; i < multiDiv.length; i++) {
    let ele = multiDiv[i];

    if (addSubOps[ele]) {
      tempOp = ele;
    } else {
      let func = addSubOps[tempOp];
      final = func(final, ele);
    }
  }

  return final;
};