/*
 * Complete the 'bestSumDownwardTreePath' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY parent
 *  2. INTEGER_ARRAY values
 */

class Node {
  constructor(val, children = []) {
    this.value = val;
    this.children = children;
  }
}

function iterateThrough(parent, values) {
  let curr = parent[0];
  let head = new Node(values[0]);
  let dictionary = {[curr]: [ head ]};

  parent.forEach( (ele, idx) => {
    if (idx > 0) {
      let node = new Node(values[idx]);
      if (!dictionary[ele]) {
        dictionary[ele] = [node];
      } else {
        dictionary[ele].push(node);
      }
  
      let parentIdx = ele - 1;
      let row = dictionary[parentIdx];
      let parent = dictionary[parentIdx][row.length - 1];
  
      parent.children.push(node);
    }
  });

  return head;
}

function bestSumDownwardTreePath(parent, values) {
  // Write your code here
  
  let tree = iterateThrough(parent, values);
  
  let stack = [tree];

  while (stack.length) {
    let length = stack.length;
    for (i = 0; i < length; i++) {
      let node = stack.shift();
      console.log(node);

      if (node.children.length) {
        stack.push(...node.children);
      }
    }
  }
}

let parent = [-1, 0, 1, 2, 0];

let values = [-2, 10, 10, -3, 10];

console.log(bestSumDownwardTreePath(parent, values));



// function bestSumDownwardTreePath(parent, values, idx = 0) {
//   // Write your code here
//   let options = [];
//   let curr = parent[idx];

//   for (let i = idx + 1; i < parent.length; i++) {
//     if (parent[i] - curr === 1) {
//       let depth = bestSumDownwardTreePath(parent, values, i);

//       if (depth > depth + values[idx]) {
//         options.push(depth);
//       } else if (values[idx] > depth + values[idx]) {
//         options.push(values[idx]);
//       } else {
//         options.push(depth + values[idx]);
//       }
//     } else {
//       if (parent[i] <= curr) {
//         break;
//       }
//     }
//   }

//   if (options.length) {
//     return Math.max(...options);
//   } else {
//     if (idx === 0) {
//       return values[idx];
//     } else {
//       if (values[idx] > 0) {
//         return values[idx];
//       } else {
//         return 0;
//       }
//     }
//   }
// }


// let parent = [-1, 0, 1, 2, 0];

// let values = [-2, 10, 10, -3, 10];
