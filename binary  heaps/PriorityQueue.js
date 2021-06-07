// it is actually a min binary heap

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // enqueue data: create node and push() into array, then bubble up to correct spot
  enqueue(data, priority) {
    const newNode = new Node(data, priority);
    this.values.push(newNode);
    this.bubbleUp();

    console.log(this.values);
  }

  // helper method for enqueue()
  bubbleUp() {
    let idx = this.values.length - 1;
    let node = this.values[idx];
    // bubble-up until reach the beginning of array
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // or until node is in correct spot
      if (node.priority >= parent.priority) break;

      this.values[parentIdx] = node;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // extract min: remove the root and find a lesser priority child
  // take last element, put it instead of root and bubble it down to adjust
  dequeue() {
    //save root to return it
    const root = this.values[0];
    const last = this.values.pop();
    // only if values array still has nodes after pop()
    if (this.values.length) {
      // last element takes root's place
      this.values[0] = last;
      this.bubbleDown();
    }
    console.log(this.values);
    return root;
  }
  // helper method for dequeue()
  bubbleDown() {
    let idx = 0;
    let node = this.values[idx];
    const length = this.values.length;

    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      // swapIdx is index of lesser priority child we are looking for
      let swapIdx = null;

      // before comparing child and node make sure it exists
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < node.priority) {
          // only saving index, actual swap is at the end
          swapIdx = leftChildIdx;
        }
      }
      // make sure to find lesser priority child out of two
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (rightChild < node && rightChild < leftChild) {
          swapIdx = rightChildIdx;
        }
      }

      // no swaps needed - break out of loop
      if (!swapIdx) break;

      // switch found lesser priority child with parent
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = node;
      // update idx for next loop to check if need to swap with children of children
      idx = swapIdx;
    }
  }
}

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

const queue = new PriorityQueue();

queue.enqueue("common cold", 5);
queue.enqueue("gunshot wound", 1);
queue.enqueue("high fever", 3);
queue.enqueue("sick baby", 2);

queue.dequeue();
queue.dequeue();
