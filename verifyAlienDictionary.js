/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let dictionary = {};

  for (let i = 0; i < order.length; i++) {
    let char = order[i];
    dictionary[char] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word = words[i];
    let next = words[i + 1];
    let max = Math.min(word.length, next.length);

    for (let j = 0; j < max; j++) {
      let wordChar = word[j];
      let nextChar = next[j];

      if (dictionary[wordChar] < dictionary[nextChar]) {
        break;
      } else if (dictionary[wordChar] > dictionary[nextChar]) {
        return false;
      } else if (j === max - 1) {
        if (word.length > next.length) {
          return false;
        }
      }
    }
  }

  return true;
};



// var isAlienSorted = function (words, order) {
//   let dictionary = {};
//   let table = new Array(words.length).fill(false);

//   for (let i = 0; i < order.length; i++) {
//     let char = order[i];
//     dictionary[char] = i;
//   }

//   debugger

//   let sorted = false;
//   let idx = 0;

//   while (!sorted) {
//     sorted = true;

//     for (let i = 0; i < table.length; i++) {
//       if (!table[i]) {
//         if (i < table.length - 1) {
//           sorted = false;
//           let char = words[i][idx];
//           let nextChar = words[i + 1][idx];

//           if (dictionary[char] > dictionary[nextChar]) {
//             return false
//           } else if (dictionary[char] < dictionary[nextChar]) {
//             if (i + 1 === table.length - 1) {
//               table[i + 1] = true;
//             }
//             table[i] = true;
//           }

//         }  

//       }
//     }

//     idx += 1;
//     let allChecked = true;

//     for (let i = 0; i < table.length; i++) {
//       if (!table[i]) {
//         allChecked = false;
//       }
//     }

//     if (allChecked) return true;


//     let tempArr = [];

//     for (let i = 0; i < table.length; i++) {
//       if (words[i].length) {
//         tempArr.push(words[i]);
//       } else {
//         if (!table[i - 1]) {
//           return false;
//         }
//       }
//     }

//     words = tempArr;
//   }

//   return true;
// };