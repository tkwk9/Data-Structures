import {Graph} from '../data_structures/graph';

export const seedGraph = () => {
  const g = new Graph();
  let start = g.addNode();
  loop(5)(() => g.addNode(undefined, start));
  return g;
};

const loop = loopCount => callback => {
  if (loopCount > 0) {
    callback();
    loop (loopCount - 1) (callback);
  }
};
