class MinHeap {
  constructor() {
    store = [null];
  }

  push(ele) {
    this.store.push(ele);
    this.sortUp();
  }

  pop(ele) {
    let top = this.store[1];
    let bottom = this.store.pop();
    this.store[1] = bottom;
    this.sortDown();
    return top;
  }

  sortUp() {
    
  }


}