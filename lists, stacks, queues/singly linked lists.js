// Big O of singly linked list:
// insertion: O(1), removal: O(1) up to O(n), search and access: O(n)
// Better than array if frequent insertion and removal is top priority

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    // empty list case
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      //not empty
    } else {
      //  current tail gets a new next
      this.tail.next = newNode;
      // move over tail marker
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;

    let current = this.head;
    let newTail;
    // at the end of loop current will point to one before last node
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // corner case
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(data) {
    const newNode = new Node(data);
    // empty list case
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      //not empty
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return;
    // save a reference for return
    const removedHead = this.head;

    this.head = this.head.next;
    this.length--;

    // corner case
    if (this.length === 0) {
      this.tail = null;
    }
    return removedHead;
  }

  get(index) {
    // lists are zero-based!
    if (index < 0 || index >= this.length) return;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, data) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.data = data;
      return foundNode;
    }
    return;
  }

  insert(index, data) {
    if (index < 0) return;
    if (index > this.length - 1) return this.push(data);
    if (index === 0) return this.unshift(data);

    const newNode = new Node(data);
    const previous = this.get(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previous = this.get(index - 1);
    const removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    // switch tail and head, save head in node for future reference
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    // null, we need to make sure tail.next = null
    let previous = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }

  // for console.log purposes only!!!
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);

list.print();
list.reverse();
list.print();
