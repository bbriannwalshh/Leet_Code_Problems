class HeapStack {
  constructor() {
    this.store = [null];
  }

  push(ele) {
    this.store.push(ele);
    this.shiftUp(this.store.length - 1);
  }

  shiftUp(idx) {
    if (idx === 1) return;
    let parentIdx = Math.floor(idx / 2);

    if (this.store[parentIdx] < this.store[idx]) {
      [this.store[parentIdx], this.store[idx]] = [this.store[idx], this.store[parentIdx]];
      this.shiftUp(parentIdx);
    }
  }

  getMax() {
    if (this.store.length <= 1) return null;
    let max = this.store[1];
    let newTop = this.store.pop();
    this.store[1] = newTop;

    this.shiftDown(1);
    return max;
  }

  shiftDown(idx) {
    let leftChildIdx = idx * 2;
    let rightChildIdx = (idx * 2) + 1;
    let curr = this.store[idx];
    let leftVal = this.store[leftChildIdx] || -Infinity;
    let rightVal = this.store[rightChildIdx] || -Infinity;

    if (curr >= leftVal && curr >= rightVal) return;

    let switchIdx = null;

    if (curr < leftVal && curr < rightVal) {
      if (leftVal > rightVal) {
        switchIdx = leftChildIdx;
      } else {
        switchIdx = rightChildIdx;
      }
    } else if (curr > leftVal && curr <= rightVal) {
      switchIdx = rightChildIdx;
    } else if (curr <= leftVal && curr > rightVal) {
      switchIdx = leftChildIdx;
    }

    [this.store[idx], this.store[switchIdx]] = [this.store[switchIdx], this.store[idx]];
  }
}



// let newHeap = new HeapStack();
// newHeap.push(1);
// newHeap.push(2);
// newHeap.push(3);
// newHeap.push(4);
// newHeap.push(5);
// console.log(newHeap.store);
// console.log(newHeap.getMax());
// console.log(newHeap.getMax());
// console.log(newHeap.getMax());
// console.log(newHeap.getMax());
// console.log(newHeap.getMax());