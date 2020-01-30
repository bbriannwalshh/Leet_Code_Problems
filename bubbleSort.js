const bubbleSort = function(array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        sorted = false;
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }

  return array;
};


console.log(bubbleSort([1,3,5,4,2]));