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

  let multiDivOps = {
    "/": (ele1, ele2) => ele1 / ele2,
    "*": (ele1, ele2) => ele1 * ele2,
  }
  let addSubOps = {
    "+": (ele1, ele2) => ele1 + ele2,
    "-": (ele1, ele2) => ele1 - ele2
  }

  let multiDiv = [];
  let temp1;
  let tempOp;

  //     0 1 2 3 4 5 6 7 8
  //     1 + 5 / 3 * 2 + 2

  for (let i = 0; i < spaceless.length; i++) {
    let ele = spaceless[i];

    if (multiDivOps[ele]) {
      tempOp = ele;
    } else if (addSubOps[ele]) {
      if (temp1) {
        multiDiv.push(temp1);
        temp1 = null;
      }
      multiDiv.push(ele);
    } else {
      if (!temp1) {
        temp1 = ele;
      } else {
        let func = multiDivOps[tempOp];
        if (!func) {
          temp1 = temp1.concat(ele);
        } else {
          let prod = func(Number(temp1), Number(ele))
          multiDiv.push(Math.floor(prod));
          temp1 = multiDiv[multiDiv.length - 1];
          tempOp = null;
        }
      }
    }
  }

  if (!multiDiv.length) return Number(temp1);
  let last = multiDiv[multiDiv.length - 1];
  if (multiDivOps[last] || addSubOps[last]) {
    multiDiv.push(temp1);
  }

  let final = null;
  console.log(multiDiv);


  for (let i = 0; i < multiDiv.length; i++) {
    let ele = multiDiv[i];
    console.log(ele);
    console.log(final);
    console.log(tempOp);

    if (addSubOps[ele]) {
      tempOp = ele;
    } else {
      if (!Number.isInteger(final)) {
        final = ele;
      } else {
        let func = addSubOps[tempOp];
        if (func) {
          final = func(Number(final), Number(ele));
          console.log(final);
        } else {
          final = final.concat(ele);
        }
      }
    }
  }

  return final;
};