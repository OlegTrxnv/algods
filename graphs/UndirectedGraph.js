// Undirected unweighted graph stored in list (js object of arrays)

class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  // add a new node
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  // add to both vertexes, order does not matter, - graph is undirected
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    // clean up items in arrays
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    // remove entry in list (entire key in object)
    delete this.adjacencyList[vertex];
  }
  // depth first traversal using recursion
  depthFirstRecursive(start) {
    const visited = {};
    const result = [];

    // recursive helper, using arrow function
    const dfs = (vertex) => {
      // base  recursion case
      if (!vertex) return null;
      // visited object: boolean true if visited
      visited[vertex] = true;
      // result array: path of traversal
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };
    dfs(start);

    console.log(result);
    return result;
  }
  // the traversal path is different from recursive solution
  depthFirstIterative(start) {
    // stack call array
    const stack = [start];
    const visited = { [start]: true };
    const result = [];
    let vertex;

    while (stack.length) {
      vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    console.log(result);
    return result;
  }

  breadthFirstIterative(start) {
    const queue = [start];
    const visited = { [start]: true };
    const result = [];
    let vertex;

    while (queue.length) {
      vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    console.log(result);
    return result;
  }

  breadthFirstIterativeReversed(start) {
    const queue = [start];
    const visited = { [start]: true };
    const result = [];
    let vertex;

    while (queue.length) {
      vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex]
        .slice()
        .reverse()
        .forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
    }
    console.log(result);
    return result;
  }

  breadthFirstRecursive(start) {
    const queue = [start];
    const visited = { [start]: true };
    const results = [];
    let vertex;
    let bfs;

    (bfs = () => {
      if (queue.length) {
        vertex = queue.shift();
        results.push(vertex);

        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
        bfs();
      }
    })();

    console.log(results);
    return results;
  }
}

const graph = new UndirectedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(graph.adjacencyList);

graph.depthFirstRecursive("A"); //[ 'A', 'B', 'D', 'E', 'C', 'F' ]
graph.depthFirstIterative("A"); //[ 'A', 'C', 'E', 'F', 'D', 'B' ]
graph.breadthFirstRecursive("A"); //[ 'A', 'B', 'C', 'D', 'E', 'F' ]
graph.breadthFirstIterative("A"); //[ 'A', 'B', 'C', 'D', 'E', 'F' ]
graph.breadthFirstIterativeReversed("A"); //[ 'A', 'C', 'B', 'E', 'D', 'F' ]
