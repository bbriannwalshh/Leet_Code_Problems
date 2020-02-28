const quickSort = function(array) {
  if (array.length <= 1) return array;
  let start = array[0];
  let less = [];
  let greater = [];

  for (let i = 1; i < array.length; i++) {
    let ele = array[i];
    if (ele < start) {
      less.push(ele);
    } else {
      greater.push(ele);
    }
  }

  less = quickSort(less);
  greater = quickSort(greater);

  return less.concat(start).concat(greater);
};

let arr = [5,2,8,10,22,4,6];

console.log(quickSort(arr));