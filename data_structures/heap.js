class Heap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  pop() {
    if (this.size <= 1) return this.heap.pop();

    const output = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.size--;

    let parentInd = 0;
    let childInd = this.getCorrectChildIndex(0);

    while(this.shouldSwap(childInd, parentInd)) {
      this.swap(childInd, parentInd);
      parentInd = childInd;
      childInd = this.getCorrectChildIndex(parentInd);
    }
    return output;
  }

  peek() {
    return this.heap[0];
  }

  insert(data) {
    this.validateData(data);
    this.heap.push(data);

    let childInd = this.size;
    let parentInd = this.parentIndex(childInd);
    this.size++;

    while (this.shouldSwap(childInd, parentInd)){
      this.swap(childInd, parentInd);
      childInd = parentInd;
      parentInd = this.parentIndex(childInd);
    }
  }

  swap(ind1, ind2) {
    [this.heap[ind1], this.heap[ind2]] =
      [this.heap[ind2], this.heap[ind1]];
  }

  validateData(data) {
    if (isNaN(data)) {
      throw new Error("Data must be a number");
    }
  }

  leftChildIndex(ind) {
    return ind * 2 + 1;
  }

  rightChildIndex(ind) {
    return ind * 2 + 2;
  }

  parentIndex(ind) {
    return Math.floor((ind - 1)/2);
  }

  hasLeftChild(ind) {
    return this.leftChildIndex(ind) < this.size;
  }

  hasRightChild(ind) {
    return this.rightChildIndex(ind) < this.size;
  }
}

export class MinHeap extends Heap {
  constructor() {
    super();
  }

  shouldSwap(childInd, parentInd) {
    return this.heap[childInd] < this.heap[parentInd];
  }


  getCorrectChildIndex(parentInd){
    if (this.hasLeftChild(parentInd)){
      if (this.hasRightChild(parentInd)){
        if (this.heap[this.leftChildIndex(parentInd)]
          <= this.heap[this.rightChildIndex(parentInd)]){
          return this.leftChildIndex(parentInd);
        } else {
          return this.rightChildIndex(parentInd);
        }
      } else {
        return this.leftChildIndex(parentInd);
      }
    }
  }
}

export class MaxHeap extends Heap {
  constructor() {
    super();
  }

  shouldSwap(childInd, parentInd) {
    return this.heap[childInd] > this.heap[parentInd];
  }


  getCorrectChildIndex(parentInd){
    if (this.hasLeftChild(parentInd)){
      if (this.hasRightChild(parentInd)){
        if (this.heap[this.leftChildIndex(parentInd)]
          >= this.heap[this.rightChildIndex(parentInd)]){
          return this.leftChildIndex(parentInd);
        } else {
          return this.rightChildIndex(parentInd);
        }
      } else {
        return this.leftChildIndex(parentInd);
      }
    }
  }
}
