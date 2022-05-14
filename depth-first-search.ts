/**
 * @param graph: Takes graph input in 2D Array and visit all connected nodes from index 0
 * @returns Returns all nodes visited
 */

function depthFirstSearch(graph: Array<number[]>): number[] {
  const length = graph.length;
  const visited = new Array(length).fill(false);
  const INITIAL_NODE = 0;

  const dfs = (node: number) => {
    if (visited[node]) return;
    visited[node] = true;
    const neighbors = graph[node];
    neighbors.forEach((item: number): void => {
      dfs(item);
    });
  };

  dfs(INITIAL_NODE);
  return visited;
}

function main(): void {
  const ADJACENT_DATA: Array<number[]> = [
    [9],
    [0],
    [],
    [2, 4, 5],
    [],
    [6],
    [7],
    [3, 10],
    [1, 7],
    [8],
    [11],
    [7],
    [],
  ];

  console.log(depthFirstSearch(ADJACENT_DATA));
}

main();
