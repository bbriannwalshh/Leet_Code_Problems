/*
 * Complete the 'lastStoneWeight' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY weights as parameter.
 */

function lastStoneWeight(weights) {
  weights.sort((a, b) => a - b);
  // Write your code here

  while (weights.length > 1) {
    let max = weights.pop();
    let second = weights.pop();

    if (max > second) {
      max = max - second;
      weights.push(max);
    }

    let last = weights.length - 1;
    let curr = weights.length - 2;
    let sorted = false;

    while (!sorted) {
      if (weights[last] < weights[curr]) {
        [weights[last], weights[curr]] = [weights[curr], weights[last]];
        last -= 1;
        curr -= 1;
      } else {
        sorted = true;
      }
    }
  }

  if (weights.length === 1) {
    return weights[0];
  } else {
    return 0;
  }
}


// var lastStoneWeight = function (stones) {
//   const heap = new MaxHeap(stones);
//   while (heap.size() > 1) {
//     const max1 = heap.poll();
//     const max2 = heap.poll();
//     if (max1 > max2) heap.offer(max1 - max2);
//   }
//   return heap.size() === 1 ? heap.poll() : 0;
// };

// class MaxHeap {
//   constructor(data = []) {
//     this.data = data;
//     this.comparator = (a, b) => b - a;
//     this.heapify();
//   }

//   // O(nlog(n)). In fact, O(n)
//   heapify() {
//     if (this.size() < 2) return;
//     for (let i = 1; i < this.size(); i++) {
//       this.bubbleUp(i);
//     }
//   }

//   // O(1)
//   peek() {
//     if (this.size() === 0) return null;
//     return this.data[0];
//   }

//   // O(log(n))
//   offer(value) {
//     this.data.push(value);
//     this.bubbleUp(this.size() - 1);
//   }

//   // O(log(n))
//   poll() {
//     if (this.size() === 0) return null;
//     const result = this.data[0];
//     const last = this.data.pop();
//     if (this.size() !== 0) {
//       this.data[0] = last;
//       this.bubbleDown(0);
//     }
//     return result;
//   }

//   // O(log(n))
//   bubbleUp(index) {
//     while (index > 0) {
//       const parentIndex = (index - 1) >> 1;
//       if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
//         this.swap(index, parentIndex);
//         index = parentIndex;
//       } else {
//         break;
//       }
//     }
//   }

//   // O(log(n))
//   bubbleDown(index) {
//     const lastIndex = this.size() - 1;
//     while (true) {
//       const leftIndex = index * 2 + 1;
//       const rightIndex = index * 2 + 2;
//       let findIndex = index;
//       if (
//         leftIndex <= lastIndex &&
//         this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
//       ) {
//         findIndex = leftIndex;
//       }
//       if (
//         rightIndex <= lastIndex &&
//         this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
//       ) {
//         findIndex = rightIndex;
//       }
//       if (index !== findIndex) {
//         this.swap(index, findIndex);
//         index = findIndex;
//       } else {
//         break;
//       }
//     }
//   }

//   // O(1)
//   swap(index1, index2) {
//     [this.data[index1], this.data[index2]] = [
//       this.data[index2],
//       this.data[index1]
//     ];
//   }

//   // O(1)
//   size() {
//     return this.data.length;
//   }
// }