// Complete the countNumbers function below.
function countNumbers(arr) {
  let outputs = [];

  for (let i = 0; i < arr.length; i++) {
    let lower = arr[i][0];
    let upper = arr[i][1];
    let counter = 0;

    for (let j = lower; j <= upper; j++) {
      let ele = j;

      if (ele < 10) {
        counter += 1;

      } else {
        let obj = {};
        let unique = true;

        while (ele >= 10) {
          let temp = ele % 10;
          ele = Math.floor(ele / 10);
          if (obj[temp]) {
            unique = false;
          } else {
            obj[temp] = true;
          }
        }

        if (obj[ele]) unique = false;

        if (unique) {
          counter += 1;
        }
      }
    }

    outputs.push(counter);
  }

  return outputs;
}


console.log(countNumbers([[1, 20], [9, 19]]));