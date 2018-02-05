export class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
    this.childCount = 0;
    this.depth = 0;
  }

  addChild(node, ind = this.childCount) {
    this.children[ind] = node;
    this.childCount++;
    node.setParent(this);
  }

  setParent(parent) {
    this.parent = parent;
    this.depth = parent.depth + 1;
  }

  bfs(data) {
    let queue = this.children.slice();
    while (queue.length > 0) {
      let tempNode = queue.shift();
      queue =  queue.concat(tempNode.children);
      if (tempNode.data === data) return tempNode;
    }
    return null;
  }

  dfs(data) {
    console.log(this.data);
    if (this.data === data){
      return this;
    } else if (this.isLeaf()) {
      return undefined;
    }

    let result;
    for (let i = 0; i < this.childCount; i++) {
      result = this.children[i].dfs(data);
      if (result) return result;
    }
    return result;
  }

  swap(node) {
    const newChildren = node.children;
    const newChildCount = node.childCount;
    const newParent = node.parent;

    node.children = this.children;
    node.childCount = this.childCount;

    this.children = newChildren;
    this.childCount = newChildCount;

    const thisInd = this.parent.children.indexOf(this);
    const nodeInd = node.parent.children.indexOf(node);

    this.parent.addChild(node, thisInd);
    newParent.addChild(this, nodeInd);
  }

  printSelf(output = {}) {
    output[this.data] = {};
    if (!this.isLeaf()) {
      this.children.forEach(child => {
        child.printSelf(output[this.data]);
      });
    }
    return output;
  }

  isLeaf() {
    return this.childCount === 0;
  }
}
