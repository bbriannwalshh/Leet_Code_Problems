// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end


//tabulation
// function stepper(array) {
//   let table = new Array(array.length).fill(false);
//   table[0] = true;

//   for (let i = 0; i < array.length; i++) {
//     if (!table[i] || table[i] === 0) continue;

//     for (let j = 1; j <= array[i]; j++) {
//       let pos = j + i;
//       table[pos] = true;
//     }
//   }

//   return table[table.length - 1];
// }



// console.log(stepper([3, 1, 0, 5, 10]));
// console.log(stepper([3, 2, 1, 0, 5, 10]));



//memoization 

function stepper(array, memo={}) {
  let key = array.length;
  if (key in memo) return memo[key];
  if (!array.length) return true;

  let step = array[0];

  for (let i = 1; i <= step; i++) {
    if (stepper(array.slice(i), memo)) {
      memo[key] = true;
      return true; 
    }
  }

  memo[key] = false;
  return false;
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