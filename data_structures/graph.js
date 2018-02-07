import {LinkedList} from './linked_list';
import {MaxHeap} from './heap';

export class Graph {
  constructor() {
    this.nodes = {};
    this.lastId = 0;
  }

  addNode(data, node) {
    const newNode = new GraphNode(this.createId(), data);
    this.nodes[newNode.id] = newNode;
    if (node) this.addEdge(newNode.id, node.id);
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
    const tempAdj = this.adjacent.slice();
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
