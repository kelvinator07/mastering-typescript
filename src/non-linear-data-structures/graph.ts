class Graph {
    adjacencyList: Map<string, string[]>;
  
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex: string): void {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1: string, vertex2: string): void {
      this.adjacencyList.get(vertex1)?.push(vertex2);
      this.adjacencyList.get(vertex2)?.push(vertex1);
    }
  
    depthFirstTraversal(startVertex: string): string[] {
      const visited: Set<string> = new Set();
      const result: string[] = [];
  
      const dfs = (vertex: string): void => {
        visited.add(vertex);
        result.push(vertex);
  
        const neighbors = this.adjacencyList.get(vertex) || [];
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
      };
  
      dfs(startVertex);
  
      return result;
    }
  }
  
  // Example:
  const myGraph = new Graph();
  
  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('C');
  myGraph.addVertex('D');
  myGraph.addEdge('A', 'B');
  myGraph.addEdge('B', 'C');
  myGraph.addEdge('C', 'D');
  myGraph.addEdge('D', 'A');
  
  console.log('Depth-First Traversal:', myGraph.depthFirstTraversal('A')); // Output Depth-First Traversal: [ 'A', 'B', 'C', 'D' ]
