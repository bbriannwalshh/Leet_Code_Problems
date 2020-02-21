class MinHeap {
  constructor() {
    this.store = [null];
  }

  push(ele) {
    this.store.push(ele);
    this.sortUp(this.store.length - 1);
  }

  shift() {
    let top = this.store[1];
    let bottom = this.store.pop();
    this.store[1] = bottom;
    this.sortDown(1);
    return top;
  }

  switch(idx1, idx2) {
    [this.store[idx1], this.store[idx2]] = [this.store[idx2], this.store[idx1]];
  }

  sortUp(idx) {
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

    if (curr > left && curr > right) {
      if (left < right) {
        switchIdx = leftChildIdx;
      } else {
        switchIdx = rightChildIdx;
      }
    } else if (curr > left) {
      switchIdx = leftChildIdx;
    } else if (curr > right) {
      switchIdx = rightChildIdx;
    }

    if (switchIdx) {
      this.switch(idx, switchIdx);
      this.sortDown(switchIdx);
    }
  }
}

let heap = new MinHeap();

heap.push(9);
heap.push(7);
heap.push(13);
heap.push(5);
heap.push(3);
heap.push(299);
heap.push(1);
heap.push(0);
console.log(heap.store);
console.log(heap.shift());
console.log(heap.shift());
console.log(heap.shift());
console.log(heap.shift());
console.log(heap.shift());
console.log(heap.shift());
console.log(heap.shift());
console.log(heap.shift());
