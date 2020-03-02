var NestedIterator = function (nestedList) {
  debugger
  let flattened = [];

  for (let i = 0; i < nestedList.length; i++) {
      if (Number.isInteger(nestedList[i])) {
          flattened.push(nestedList[i]);
      } else {
          flattened = flattened.concat(NestedIterator(nestedList[i]));
      }
  }

  return flattened;
};

let nested = [1, [2, 3], 4, [5, 6, 7, [8]]];

console.log(NestedIterator(nested));