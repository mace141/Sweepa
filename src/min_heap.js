class MinHeap {
  constructor() {
    this.array = [null];
  }

  empty() {
    return this.array.length === 1;
  }

  insert(node) {
    this.array.push(node);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx === 1) return;
    
    const parentIdx = Math.floor(idx / 2);
    if (this.array[idx].key < this.array[parentIdx].key) {
      [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
      this.siftUp(parentIdx);
    }
  }

  extractMin() {
    const min = this.array[1];
    if (!min) return null;
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return min;
  }

  siftDown(idx) {
    const leftIdx = idx * 2;
    const rightIdx = idx * 2 + 1;
    const arr = this.array;
    let leftChild = arr[leftIdx];
    let rightChild = arr[rightIdx];
    const node = arr[idx];
    
    if (!leftChild) leftChild = { key: Infinity };
    if (!rightChild) rightChild = { key: Infinity };
    if (node.key <= leftChild.key && node.key <= rightChild.key) return;
    
    const swapIdx = leftChild.key < rightChild.key ? leftIdx : rightIdx;
    [arr[swapIdx], arr[idx]] = [arr[idx], arr[swapIdx]];
    this.siftDown(swapIdx);
  }
}

export default MinHeap;