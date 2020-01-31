const insertionSort = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    let j;
    for (j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currElement;
  }
  return arr;
};

console.log(insertionSort([4,7,3,2,8,3]));