// [6, 1, 9, 8, 5, ...], 3 => 23

// array(n), k => the sum of the biggest k elements

// ---------------------

//   // sort array from lowest to highest
//   // pop off the last k elements
//   // sum up those elements 

//   [6, 1, 9, 8, 5, 12], 3 => 23
// n * log k

const sortHelper = function(a, b) {
  if (a < b) {
    return 1;
  } else {
    return -1;
  }
};

const sumOfLargestKElements = function(array, k) {
  let currLargest = [];

  for (let i = 0; i < array.length; i++) {
    if (currLargest.length < k) {
      currLargest.push(array[i]);

      if (currLargest.length === k) {
        currLargest.sort(sortHelper);
      }

    } else {
      let lastEle = currLargest[k - 1];
      let currEle = array[i];

      if (lastEle < currEle) {
        currLargest.pop();
        currLargest.push(currEle);
        currLargest.sort(sortHelper);
      }
    }
  }
  console.log(currLargest);
  return currLargest.reduce((a,b) => a + b, 0);
};

let arr = [6,1,9,8,5];
let k = 3;
// console.log(sumOfLargestKElements(arr, k));
// currLargest: 12, 9, 8
// lastEle = 6;
// currEle = 5
// idx: 4
// k: 3

// let currLargest = [];

// for (let i = 0; i < array.length; i++) {
//   if (currLargest.length < k) {
//     currLargest, push(array[i]);
//     if (currLargest.length === k) {
//       currLargest.sort(sortHelper)
//     }
//   } else {
//     let lastEle = currLargest[k - 1];
//     let currEle = array[i];

//     if (lastEle < currEle) {
//       currLargest.pop();
//       currLargest.push(currEle);
//       // currLargest[k - 1] = currEle
//       currLargest.sort(sortHelper);
//     }
//   }
// }

// return Math.sum(...currLargest);

// ------------------------------------------

//   [6, 1, 9, 8, 5], [A, B, A, A, B], 3, 2 => 22(9, 8, 5)

// array1, array2, k, m

// ---------------------

// //let storage = [[9, 8],[5, 1]];

// // iterate through the array
// // check which character it represents
// 	// store character max’s in separate arrays

// // iterate through the specific storage elements
// 	// compile them all into a separate array
// 	// find max k numbers of those => sum 
	




















const sumStorage = function (arr1, arr2, k, m) {

let storage = [];				// storage: [[6], [1]]
let chars = {};					// chars: {A: 0, B:1}

for (let i = 0; i < arr1.length; i++) {
  let num = arr1[i];			// 9
  let char = arr2[i];			// A

  if (Number.isInteger(chars[char])) {
    let idx = chars[char];
    let store = storage[idx];

    if (store.length < m) {
      store.push(num);

      if (store.length === m) {
        store.sort(sortHelper);
      }
    } else {
      let lastEle = store[m - 1];
      let currEle = num;

      if (currEle > lastEle) {
        store[m - 1] = num;
        store.sort(sortHelper);
      }
    }
  } else {
    chars[char] = storage.length;
    storage.push([num]);
  }
}

let combined = storage.flat();
combined.sort(sortHelper);
let maxTotal = [];
for (let i = 0; i < k; i++) {
  maxTotal.push(combined[i]);
}

return maxTotal.reduce((a,b) => a + b, 0);
};






let arr1 = [6, 1, 9, 8, 5];
let arr2 = ["A", "B", "A", "A", "B"];
let j = 3;
let m = 2; 

console.log(sumStorage(arr1, arr2, j, m));


// User, Post, ...

// 1. User can make posts
// 2. User can likes posts
// 3. User can make friends

// ----------------------------------------
//   SQL

// User Table
// has likes, has friends, posts

// Friends Joins Table
// person: id1, id2, id3, id4
// id1: person, id2

// A B C D E F
// A < -> B < -> C < -> A

// Posts Table
// has likes
// owned by User
// Likes
// owned by User
// owned by Post




