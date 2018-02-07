import {LinkedList} from './linked_list';
import {MaxHeap} from './heap';

export class Graph {
  constructor() {
    this.nodes = {};
    this.lastId = 0;
    this.size = 0;
  }

  dfs(id, targetId, trace = new LinkedList(), visited = new Set()) {
    visited.add(id);
    if (id === targetId) {
      trace.prepend(id);
      return trace;
    }
    let node = this.getNode(id);
    for (let i = 0; i < node.adjacents.length; i++) {
      const tempNode = node.adjacents[i];
      if (!visited.has(tempNode.id)){
        const result = this.dfs(tempNode.id, targetId, trace, visited);
        if (result) {
          result.prepend(node.id);
          return result;
        }
      }
    }
    return false;
  }

  bfs(startId, endId) {
    const visited = new Set();
    const referral = {};
    const queue = new LinkedList();

    queue.prepend(this.getNode(startId));
    referral[startId] = false;
    visited.add(startId);
    while (!queue.isEmpty()) {
      const tempNode = queue.pop();
      this.addAdjacents(tempNode, visited, queue, referral);
      if (tempNode.id === endId){
        return this.tracePath(tempNode, referral);
      }
    }
    return false;
  }

  tracePath(endNode, referral) {
    const trace = new LinkedList();
    trace.prepend(endNode.id);
    let tempNode = referral[endNode.id];
    while (tempNode){
      trace.prepend(tempNode.id);
      tempNode = referral[tempNode.id];
    }
    return trace;
  }

  addAdjacents(sourceNode, visited, queue, referral) {
    sourceNode.adjacents.forEach(node => {
      if (!visited.has(node.id)) {
        visited.add(node.id);
        queue.prepend(node);
        referral[node.id] = sourceNode;
      }
    });
  }

  addNode(node, data) {
    const newNode = new GraphNode(this.createId(), data);
    this.nodes[newNode.id] = newNode;
    if (node) this.addEdge(newNode.id, node.id);
    this.size++;
    return newNode;
  }

  createId() {
    this.lastId++;
    return this.lastId;
  }

  getNode(id) {
    return this.nodes[id];
  }

  removeNode(id) {
    const tempNode = this.nodes[id].removeSelf();
    delete this.nodes[id];
    this.size--;
    return tempNode;
  }

  addEdge(id1, id2) {
    this.getNode(id1)
      .connect(this.getNode(id2));
  }
}

class GraphNode {
  constructor(id, data) {
    this.id = id;
    this.data = data;
    this.adjacents = [];
  }

  removeSelf() {
    const tempAdj = this.adjacents.slice();
    tempAdj.forEach(node => {
      this.disconnect(node);
    });
    return this;
  }

  connect(node){
    this.adjacents.push(node);
    node.adjacents.push(this);
    return node;
  }

  disconnect(node) {
    this.adjacents.splice(this.adjacents.indexOf(node), 1);
    node.adjacents.splice(node.adjacents.indexOf(this), 1);
    return node;
  }

}
