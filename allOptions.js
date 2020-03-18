

const allOptions = function(arr, target) {
  let numCounter = 0;
  
  for (let i = 0; i < arr.length; i ++) {
    let curr = arr[i];

    if (curr <= target) {
      numCounter += allOptions(arr.slice(i), target - curr);
    }
  }

  return numCounter;
};