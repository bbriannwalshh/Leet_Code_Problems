

const allOptions = function(arr, target) {
  if (target === 0) return 1;
  let numCounter = 0;
  
  for (let i = 0; i < arr.length; i ++) {
    let curr = arr[i];

    if (curr <= target) {
      numCounter += allOptions(arr.slice(i), target - curr);
    }
  }

  return numCounter;
};

console.log(allOptions([1,2,3], 5));