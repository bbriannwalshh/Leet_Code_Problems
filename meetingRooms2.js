// Given an array of meeting time intervals consisting of start and end times
// [[s1, e1], [s2, e2],...](si < ei), find the minimum number of conference rooms required.

//   Example 1:

// Input: [[0, 30], [5, 10], [15, 20]]
// Output: 2
// Example 2:

// Input: [[7, 10], [2, 4]]
// Output: 1

/**
 * @param {number[][]} intervals
 * @return {number}
 */
// var minMeetingRooms = function (intervals) {
//   if (!intervals.length) return 0;
//   let rooms = [[intervals[0]]];

//   for (let i = 1; i < intervals.length; i++) {
//     let interval = intervals[i];
//     let pushed = false;

//     for (let j = 0; j < rooms.length; j++) {
//       let room = rooms[j];
//       let working = true;

//       for (let k = 0; k < room.length; k++) {
//         let tempInterval = room[k];

//         let intStart = interval[0];
//         let intEnd = interval[1];

//         let tempStart = tempInterval[0];
//         let tempEnd = tempInterval[1];

//         if (intStart <= tempStart && intEnd > tempStart) {
//           working = false;
//           break;
//         } else if (intStart >= tempStart && intStart < tempEnd) {
//           working = false;
//           break;
//         }
//       }

//       if (working) {
//         room.push(interval);
//         pushed = true;
//         break;
//       }
//     }

//     if (!pushed) {
//       rooms.push([interval]);
//     }
//   }

//   return rooms.length;
// };






/**
 * @param {number[][]} intervals
 * @return {number}
 */
class MinHeap {
  constructor() {
    this.store = [null];
  }

  push(ele) {
    this.store.push(ele);
    this.sortUp(this.store.length - 1);
  }

  shift() {
    if (this.store.length > 2) {
      let top = this.store[1];
      let bottom = this.store.pop();
      this.store[1] = bottom;
      this.sortDown(1);
      return top;
    } else {
      let top = this.store.pop();
      return top;
    }
  }

  getTop() {
    return this.store[1];
  }

  switch(idx1, idx2) {
    [this.store[idx1], this.store[idx2]] = [this.store[idx2], this.store[idx1]];
  }

  sortUp(idx) {
    if (idx === 1) return

    let parentIdx = Math.floor(idx / 2);
    if (this.store[parentIdx] > this.store[idx]) {
      this.switch(idx, parentIdx);
      this.sortUp(parentIdx);
    }
  }

  sortDown(idx) {
    let leftChildIdx = idx * 2;
    let rightChildIdx = idx * 2 + 1;
    let curr = this.store[idx];
    let left = this.store[leftChildIdx];
    let right = this.store[rightChildIdx];
    let switchIdx = null;

    if (left && right && curr > left && curr > right) {
      if (left < right) {
        switchIdx = leftChildIdx;
      } else {
        switchIdx = rightChildIdx;
      }
    } else if (left && curr > left) {
      switchIdx = leftChildIdx;
    } else if (right && curr > right) {
      switchIdx = rightChildIdx;
    }

    if (switchIdx) {
      this.switch(idx, switchIdx);
      this.sortDown(switchIdx);
    }
  }
}

function sortFunction(a, b) {
  if (a[0] === b[0]) {
    return 0;
  }
  else {
    return (a[0] < b[0]) ? -1 : 1;
  }
}

var minMeetingRooms = function (intervals) {
  if (!intervals.length) return intervals;

  let sorted = intervals.sort(sortFunction);
  console.log(sorted);
  let heap = new MinHeap();

  let firstInterval = intervals[0];
  heap.push(firstInterval[1]);

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    let start = interval[0];
    let end = interval[1];
    let array = heap.store;

    console.log(array[1]);
    console.log(interval[0]);

    if (array[1] > interval[0]) {
      heap.push(interval[1]);
    } else {
      let top = heap.shift();
      console.log(heap.store);
      heap.push(interval[1]);
    }
  }

  console.log(heap.store);
  return heap.store.length - 1;



};


// let input = [[1293, 2986], [848, 3846], [4284, 5907], [4466, 4781], [518, 2918], [300, 5870]];
// console.log(minMeetingRooms(input));
