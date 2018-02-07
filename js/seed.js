import {Graph} from '../data_structures/graph';

export const seedGraph = () => {
  const g = new Graph();
  let start = g.addNode();
  loop(5)(() => g.addNode(start));
  let node2 = g.getNode(2);
  loop(2)(() => g.addNode(node2));
  let node8 = g.getNode(8);
  let node9 = g.addNode(node8);
  let node10 = g.addNode(node9);
  let node11 = g.addNode(node10);
  let node12 = g.addNode(node11);
  g.addEdge(4, 11);
  g.addEdge(5, 12);
  g.addEdge(1, 12);
  return g;
};

const loop = loopCount => callback => {
  if (loopCount > 0) {
    callback();
    loop (loopCount - 1) (callback);
  }
};
