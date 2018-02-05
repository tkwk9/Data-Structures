export class BSTNode {
  constructor(data) {
    this.data = data;
    this.depth = 0;
    this.left = undefined;
    this.right = undefined;

    this.addLeftChild = this.addLeftChild.bind(this);
    this.addRightChild = this.addRightChild.bind(this);
  }

  insert(data) {
    this.validateInput(data);

    const child = (data <= this.data) ? this.leftChild : this.rightChild;
    const addChild =
      (data <= this.data) ? this.addLeftChild : this.addRightChild;

    if (child) {
      child.insert(data);
    } else {
      addChild(new BSTNode(data));
    }
  }

  search(data) {
    this.validateInput(data);

    if (this.data === data) {
      return this;
    } else if (this.isLeaf()) {
      return undefined;
    }
    const child = (data < this.data) ? this.leftChild : this.rightChild;
    if (child) {
      return child.search(data);
    } else {
      return false;
    }
  }

  addLeftChild(childNode) {
    this.leftChild = childNode;
    this.leftChild.parent = this;
    this.leftChild.depth = this.depth + 1;
  }

  addRightChild(childNode) {
    this.rightChild = childNode;
    this.rightChild.parent = this;
    this.rightChild.depth = this.depth + 1;
  }

  printSelf(output = {}) {
    output.data = this.data;
    output.left = {};
    output.right = {};

    if (this.leftChild) {
      this.leftChild.printSelf(output.left);
    }
    if (this.rightChild) {
      this.rightChild.printSelf(output.right);
    }

    return output;
  }

  isLeaf() {
    return !(this.leftChild) && !(this.rightChild);
  }

  validateInput(data) {
    if (isNaN(data)) {
      throw new Error("Data must be an integer");
    }
  }
}
