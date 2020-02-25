const myMerge = function (arr1, arr2) {
  let sorted = [];

  while (arr1.length && arr2.length) {
    let ele1 = arr1[0]; 
    let ele2 = arr2[0]; 

    if (ele1 < ele2) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  let concatted = sorted.concat(arr1).concat(arr2);
  console.log(concatted);
  return concatted;
};

const mergeSort = function(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return myMerge(mergeSort(left), mergeSort(right));
};

let array = [5,8,10,3,15,2,6];

console.log(mergeSort(array));