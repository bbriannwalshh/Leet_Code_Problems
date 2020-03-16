/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  let counter = {};

  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    counter[char] ? counter[char] += 1 : counter[char] = 1;
  }

  let keys = Object.keys(counter);
  let heap = new maxHeap();


  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let val = counter[key];

    heap.push([key, val]);
  }

  let newStr = "";

  while (heap.store.length > 2) {
    let first = heap.getMax();
    let second = heap.getMax();

    newStr = newStr.concat(first[0]);

    if (first[1] >= 2) {
      first[1] -= 1;
      heap.push(first);
    }

    newStr = newStr.concat(second[0]);


    if (second[1] >= 2) {
      second[1] -= 1;
      heap.push(second);
    }
  }

  let final = heap.getMax();
  if (!final) {
    return newStr;
  } else {
    if (final[1] > 1) {
      return "";
    } else {
      newStr = newStr.concat(final[0]);
      return newStr;
    }
  }
};

class maxHeap {
  constructor() {
    this.store = [null];
  }

  push(ele) {
    this.store.push(ele);
    this.filterUp(this.store.length - 1);
  }

  filterUp(idx) {
    if (idx === 1) return;
    let current = this.store[idx];
    let currCount = current[1];
    let parentIdx = Math.floor(idx / 2);
    let parent = this.store[parentIdx];
    let parentCount = parent[1];

    if (currCount > parentCount) {
      [this.store[idx], this.store[parentIdx]] =
        [this.store[parentIdx], this.store[idx]];
      this.filterUp(parentIdx);
    }
  }

  getMax() {
    if (this.store.length <= 1) return null;
    if (this.store.length === 2) return this.store.pop();

    let max = this.store[1];
    let newTop = this.store.pop();
    this.store[1] = newTop;

    this.filterDown(1);
    return max;
  }

  filterDown(idx) {
    let leftChildIdx = idx * 2;
    let rightChildIdx = idx * 2 + 1;

    let curr = this.store[idx];
    let currVal = curr[1];

    let left = this.store[leftChildIdx];
    let leftVal = left ? left[1] : null;

    let right = this.store[rightChildIdx];
    let rightVal = right ? right[1] : null;

    if (currVal >= leftVal && currVal >= rightVal) return;

    let switchIdx = null;

    if (currVal < leftVal && currVal < rightVal) {
      if (leftVal >= rightVal) {
        switchIdx = leftChildIdx;
      } else {
        switchIdx = rightChildIdx;
      }
    } else if (currVal >= leftVal && currVal < rightVal) {
      switchIdx = rightChildIdx;
    } else if (currVal >= rightVal && currVal < leftVal) {
      switchIdx = leftChildIdx;
    }

    [this.store[idx], this.store[switchIdx]] =
      [this.store[switchIdx], this.store[idx]];

    this.filterDown(switchIdx);
  }
}