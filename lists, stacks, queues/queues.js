// Queue: FIFO order

// Queue Array implementation
// Big O: insertion or removal O(1) (depending on methods pair), search & access O(N)

const queue = [];
//add and remove item
queue.unshift(data);
queue.pop();

// or using this pair:
queue.push(data);
queue.shift();

// Queue linked list implementation, adding at the end and removing from the beginning
// Big O: insertion & removal O(1), search & access O(N)
class Item {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // similar to list.push(data)
  enqueue(data) {
    const newItem = new Item(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }
  // similar to lo list.shift()
  dequeue() {
    if (!this.first) return null;

    const removedFirst = this.first;

    if (this.first === this.last) {
      this.last === null;
    }
    this.first = this.first.next;
    this.size--;

    return removedFirst.data;
  }
}
