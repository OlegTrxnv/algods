// Stack: LIFO order
// Big O: insertion & removal O(1), search & access O(N)

// Stack Array implementation, push and pop are more efficient

const stack = [];
// adding items
stack.push(data);

// removing items
stack.pop();

// Stack linked list implementation (adding and removing from the beginning more efficient)
// better than Array for massive data
class Item {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //   similar to list.unshift(data)
  push(data) {
    const newItem = new Item(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      newItem.next = this.first;
      this.first = newItem;
    }
    return ++this.size;
  }

  //   similar to list.shift()
  pop() {
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
