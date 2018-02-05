export class LinkedList {
  constructor() {
    this.head = new LinkedListNode();
    this.tail = new LinkedListNode();

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
  }

  append(data) {
    const newNode = new LinkedListNode(data);

    newNode.prev = this.tail.prev;
    this.tail.prev.next = newNode;

    newNode.next = this.tail;
    this.tail.prev = newNode;
    this.size++;
    return newNode;
  }

  prepend(data) {
    const newNode = new LinkedListNode(data);

    newNode.next = this.head.next;
    this.head.next.prev = newNode;

    newNode.prev = this.head;
    this.head.next = newNode;
    this.size++;
    return newNode;
  }

  deleteNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = node.next;
    next.prev = node.prev;

    node.next = undefined;
    node.prev = undefined;

    this.size--;

    return node;
  }

  deleteWithData(data) {
    if (this.size === 0) return null;

    let tempNode = this.head;
    while (tempNode.next.data !== data) {
      tempNode = tempNode.next;
      if (tempNode === this.tail) return null;
    }

    return this.deleteNode(tempNode.next);
  }
}

export class LinkedListNode {
  constructor(data) {
    this.data = data;
  }

  append(data) {
    const newNode = new LinkedListNode(data);
    let tempNode = this;
    while (tempNode.next) {
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
    newNode.prev = tempNode;
  }

  deleteNext(){
    let tempNode = this.next;
    this.next = this.next.next;
    if (this.next) this.next.prev = this;

    tempNode.next = undefined;
    tempNode.prev = undefined;
    
    return tempNode;
  }

  deleteWithData(data) {
    let tempNode = this;
    while (tempNode.next.data !== data) {
      tempNode = tempNode.next;
      if (tempNode.next === undefined) {
        return null;
      }
    }
    return tempNode.deleteNext();
  }
}
