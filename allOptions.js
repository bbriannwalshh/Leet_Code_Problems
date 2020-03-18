

const allOptions = function(arr, target) {

  let sorted = arr.sort((a,b) => {
    if (a > b){
      return -1;
    } else {
      return 1;
    }
  });
  
  let options = dfsOptions(sorted, target);
  
  return Math.min(...options);
};

const dfsOptions = function(sorted, target) {
  if (target === 0) return 0;
  let options = [];

  for (let i = 0; i < sorted.length; i++) {
    let curr = sorted[i];

    if (curr <= target) {
      options.push(dfsOptions(sorted.slice(i), target - curr));
    }
  }

  let result = [];

  for (let i = 0; i < options.length; i++) {
    let ele = options[i];

    if (Array.isArray(ele)) {
      for (let i = 0; i < ele.length; i++) {
        let subEle = ele[i];

        result.push(subEle + 1);
      }
    } else {
      result.push(ele + 1);
    }

  }

  return result;
};

console.log(allOptions([1,2,3], 5));