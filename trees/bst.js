// Big O: insertion O(log n), searching O(log n) - not guaranteed, depends on root location
// Space complexity: wide trees (more common) - depth first is better (fewer nodes to keep track of)

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    //  empty tree case
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    //  set current on top of the tree
    let current = this.root;
    while (true) {
      //  break of the loop if trying to insert existing data
      if (data === current.data) return;
      // LEFT side
      if (data < current.data) {
        // insert as a new node
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        // move current down and left for the next iteration
        current = current.left;
        // RIGHT side
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return;
    return current;
  }

  contains(data) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  traversalBreadthFirst() {
    let node = this.root;
    const queue = [];
    const visited = [node];

    while (queue.length) {
      //  shift first el in queue into node
      node = queue.shift();
      // track the node as visited
      visited.push(node);
      // push node's children into queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  // visited = [10, 6, 3, 8, 15, 20] (easy to flatten out a tree)
  traversalDepthFirstPreOrder() {
    const visited = [];

    function traverse(node) {
      //  push first
      visited.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
  // visited = [3, 8, 6, 20, 15, 10]
  traversalDepthFirstPostOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      // push after
      visited.push(node);
    }
    traverse(this.root);
    return visited;
  }

  // visited = [3, 6, 8, 10, 15, 20] (in order for BST!)
  traversalDepthFirstInOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      // push in the middle
      visited.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}

//      10
//   6     15
// 3   8     20

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree);
