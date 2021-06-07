// Heaps are type of binary trees, min or max. Filled out left to right.
// Big O notation: insertion, removal - O(log n), search - O(n)
// heaps are not built searchable

// binary heap flattened out in js array
// [100,  80,  39,  41,  18,  20]
//  root
//         l    r
//                  ll   lr   rl
// leftChildIdx = parentIdx * 2 + 1
// rightChildIdx = parentIdx * 2 + 2

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // insert data: push at the end and bubble up to correct spot
  insert(data) {
    this.values.push(data);
    this.bubbleUp();

    console.log(this.values);
  }
  // helper method for insert()
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    // bubble up until reach the beginning of array
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // or until element is in correct spot
      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // extract max: remove root and find a max child to replace it
  // take last element, put it instead of root and bubble it down to adjust
  remove() {
    //save root to return it
    const root = this.values[0];
    const last = this.values.pop();
    // only if values array still has elements after pop()
    if (this.values.length) {
      // last element takes root's place
      this.values[0] = last;
      this.bubbleDown();
    }
    console.log(this.values);
    return root;
  }

  // helper method for remove()
  bubbleDown() {
    let idx = 0;
    let element = this.values[idx];
    const length = this.values.length;

    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      // swapIdx is index of bigger child we are looking for
      let swapIdx = null;

      // before comparing child and element make sure it exists
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          // only saving index, actual swap is at the end
          swapIdx = leftChildIdx;
        }
      }
      // make sure to find bigger out of two children
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (rightChild > element && rightChild > leftChild) {
          swapIdx = rightChildIdx;
        }
      }

      // no swaps needed - break out of loop
      if (!swapIdx) break;

      // switch found bigger child and parent
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = element;
      // update idx for next loop to check if need to swap with children of children
      idx = swapIdx;
    }
  }
}

const heap = new MaxBinaryHeap();

heap.insert(80);
heap.insert(41);
heap.insert(39);
heap.insert(100);
heap.insert(18);
heap.insert(20);
heap.remove();
