function stepper(array) {
  let table = new Array(array.length).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i] === false) continue;

    for (let j = i; j < table.length; j++) {
      if (array[i] >= (j - i)) {
        table[j] = true;
      }
    }
  }

  return table[table.length - 1];
}

console.log(stepper([3,1,0,5,10]));
console.log(stepper([3,2,1,0,5,10]));