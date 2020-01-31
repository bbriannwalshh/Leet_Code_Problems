

function stepper(array, memo={}) {
  
}



console.log(stepper([3, 1, 0, 5, 10]));
console.log(stepper([3, 2, 1, 0, 5, 10]));

// ******TABULATION******

// function stepper(array) {
//   let table = new Array(array.length).fill(false);
//   table[0] = true;

//   for (let i = 0; i < table.length; i++) {
//     if (table[i] === false) continue;

//     for (let j = i; j < table.length; j++) {
//       if (array[i] >= (j - i)) {
//         table[j] = true;
//       }
//     }
//   }

//   return table[table.length - 1];
// }



//  ******RECURSIVE******

// function stepper(array) {
//   if (array.length === 0) return true;
//   let steps = array[0];

//   for (let i = 1; i <= steps; i++) {
//     let sliced = array.slice(i);
//     if (stepper(sliced)) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(stepper([3,1,0,5,10]));
// console.log(stepper([3,2,1,0,5,10]));