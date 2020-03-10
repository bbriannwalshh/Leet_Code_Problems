/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  debugger
  let dictionary = {};
  let table = new Array(words.length).fill(false);

  for (let i = 0; i < order.length; i++) {
    let char = order[i]
    dictionary[char] = i;
  }

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < table.length; i++) {
      if (!table[i]) {
        sorted = false;
        let char = words[i][0];
        let nextChar = words[i + 1][0];

        if (dictionary[char] > dictionary[nextChar]) {
          return false
        } else if (dictionary[char] < dictionary[nextChar]) {
          if (i + 1 === table.length - 1) {
            table[i + 1] = true;
          }
          table[i] = true;
        }

        words[i] = words[i].slice(1);
      }
    }

    let allChecked = true;

    for (let i = 0; i < table.length; i++) {
      if (!table[i]) {
        allChecked = false;
      }
    }

    if (allChecked) return true;


    let tempArr = [];

    for (let i = 0; i < table.length; i++) {
      if (words[i].length) {
        tempArr.push(words[i]);
      } else {
        if (!table[i - 1]) {
          return false;
        }
      }
    }

    words = tempArr;
  }

  return true;
};