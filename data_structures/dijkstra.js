let graph;

function resetGraph() {
  graph = [
    { value: 'a', ind: 0, neighbors: [[1, 7], [2, 3]] },
    { value: 'b', ind: 1, neighbors: [[0, 7], [2, 1], [3, 2], [4, 6]] },
    { value: 'c', ind: 2, neighbors: [[0, 3], [1, 1], [3, 2]] },
    { value: 'd', ind: 3, neighbors: [[2, 2], [1, 2], [4, 4]] },
    { value: 'e', ind: 4, neighbors: [[1, 6], [3, 4]] }
  ];
}

export function dijkstra(start, target) {
  resetGraph();

  graph.forEach(node => {
    node.dist = Number.POSITIVE_INFINITY;
  });
  const unvisited = new Set(graph);
  let current = graph[start];
  unvisited.delete(current);
  current.dist = 0;
  while (current) {
    current.neighbors.forEach(neighbor => {
      const node = graph[neighbor[0]];
      if (unvisited.has(node)) {
        const newDist = neighbor[1] + current.dist;
        if (node.dist > newDist) {
          node.dist = newDist;
          node.prev = current.ind;
        }
      }
    });
    current = getLowestDist(unvisited);
  }
  let output = `[${graph[target].value}]`;
  target = graph[target].prev;
  while (target !== undefined) {
    output = `[${graph[target].value}] => ` + output;
    target = graph[target].prev;
  }

  return output;
}

function getLowestDist(set) {
  let temp;
  set.forEach(node => {
    if (!temp || node.dist < temp.dist) {
      temp = node;
    }
  });
  set.delete(temp);
  return temp;
}
