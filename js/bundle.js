/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_structures_linked_list__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_structures_tree_node__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_structures_bst_node__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_structures_heap__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_structures_graph__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__seed__ = __webpack_require__(9);







$( () => {
  window.LinkedList = __WEBPACK_IMPORTED_MODULE_0__data_structures_linked_list__["a" /* LinkedList */];
  window.LinkedListNode = __WEBPACK_IMPORTED_MODULE_0__data_structures_linked_list__["b" /* LinkedListNode */];
  window.TreeNode = __WEBPACK_IMPORTED_MODULE_1__data_structures_tree_node__["a" /* TreeNode */];
  window.BSTNode = __WEBPACK_IMPORTED_MODULE_2__data_structures_bst_node__["a" /* BSTNode */];
  window.MinHeap = __WEBPACK_IMPORTED_MODULE_3__data_structures_heap__["b" /* MinHeap */];
  window.MaxHeap = __WEBPACK_IMPORTED_MODULE_3__data_structures_heap__["a" /* MaxHeap */];
  window.Graph = __WEBPACK_IMPORTED_MODULE_4__data_structures_graph__["a" /* Graph */];

  window.g = __WEBPACK_IMPORTED_MODULE_5__seed__["a" /* seedGraph */]();

  window.root = new __WEBPACK_IMPORTED_MODULE_1__data_structures_tree_node__["a" /* TreeNode */]("root");

  window.root.addChild(new __WEBPACK_IMPORTED_MODULE_1__data_structures_tree_node__["a" /* TreeNode */]("child1"));
  window.root.addChild(new __WEBPACK_IMPORTED_MODULE_1__data_structures_tree_node__["a" /* TreeNode */]("child2"));
  window.root.addChild(new __WEBPACK_IMPORTED_MODULE_1__data_structures_tree_node__["a" /* TreeNode */]("child3"));

  window.root.children[0].addChild(new __WEBPACK_IMPORTED_MODULE_1__data_structures_tree_node__["a" /* TreeNode */]('child1-1'));
  window.root.children[0].addChild(new __WEBPACK_IMPORTED_MODULE_1__data_structures_tree_node__["a" /* TreeNode */]('child1-2'));
  window.root.children[1].addChild(new __WEBPACK_IMPORTED_MODULE_1__data_structures_tree_node__["a" /* TreeNode */]('child2-1'));

});


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LinkedList {
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

  printSelf() {
    let output = ["[Head]"];
    let tempNode = this.head;
    while (tempNode.next !== this.tail) {
      tempNode = tempNode.next;
      output.push(`<->[${tempNode.data}]`);
    }
    output.push(`<->[Tail]`);
    return output.join('');
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LinkedList;


class LinkedListNode {
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

    return tempNode;
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

  printSelf(output = []) {
    if (this.prev === undefined) {
      output.push(`[${this.data}]`);
    } else {
      output.push(`<->[${this.data}]`);
    }

    if (this.next === undefined) {
      return output.join('');
    } else {
      return this.next.printSelf(output);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = LinkedListNode;



/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TreeNode {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = TreeNode;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class BSTNode {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = BSTNode;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Heap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  pop() {
    if (this.size <= 1) return this.heap.pop();

    const output = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.size--;

    let parentInd = 0;
    let childInd = this.getCorrectChildIndex(0);

    while(this.shouldSwap(childInd, parentInd)) {
      this.swap(childInd, parentInd);
      parentInd = childInd;
      childInd = this.getCorrectChildIndex(parentInd);
    }
    return output;
  }

  peek() {
    return this.heap[0];
  }

  insert(data) {
    this.validateData(data);
    this.heap.push(data);

    let childInd = this.size;
    let parentInd = this.parentIndex(childInd);
    this.size++;

    while (this.shouldSwap(childInd, parentInd)){
      this.swap(childInd, parentInd);
      childInd = parentInd;
      parentInd = this.parentIndex(childInd);
    }
  }

  swap(ind1, ind2) {
    [this.heap[ind1], this.heap[ind2]] =
      [this.heap[ind2], this.heap[ind1]];
  }

  validateData(data) {
    if (isNaN(data)) {
      throw new Error("Data must be a number");
    }
  }

  leftChildIndex(ind) {
    return ind * 2 + 1;
  }

  rightChildIndex(ind) {
    return ind * 2 + 2;
  }

  parentIndex(ind) {
    return Math.floor((ind - 1)/2);
  }

  hasLeftChild(ind) {
    return this.leftChildIndex(ind) < this.size;
  }

  hasRightChild(ind) {
    return this.rightChildIndex(ind) < this.size;
  }
}

class MinHeap extends Heap {
  constructor() {
    super();
  }

  shouldSwap(childInd, parentInd) {
    return this.heap[childInd] < this.heap[parentInd];
  }


  getCorrectChildIndex(parentInd){
    if (this.hasLeftChild(parentInd)){
      if (this.hasRightChild(parentInd)){
        if (this.heap[this.leftChildIndex(parentInd)]
          <= this.heap[this.rightChildIndex(parentInd)]){
          return this.leftChildIndex(parentInd);
        } else {
          return this.rightChildIndex(parentInd);
        }
      } else {
        return this.leftChildIndex(parentInd);
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = MinHeap;


class MaxHeap extends Heap {
  constructor() {
    super();
  }

  shouldSwap(childInd, parentInd) {
    return this.heap[childInd] > this.heap[parentInd];
  }


  getCorrectChildIndex(parentInd){
    if (this.hasLeftChild(parentInd)){
      if (this.hasRightChild(parentInd)){
        if (this.heap[this.leftChildIndex(parentInd)]
          >= this.heap[this.rightChildIndex(parentInd)]){
          return this.leftChildIndex(parentInd);
        } else {
          return this.rightChildIndex(parentInd);
        }
      } else {
        return this.leftChildIndex(parentInd);
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MaxHeap;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linked_list__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heap__ = __webpack_require__(7);



class Graph {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Graph;


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


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_structures_graph__ = __webpack_require__(8);


const seedGraph = () => {
  const g = new __WEBPACK_IMPORTED_MODULE_0__data_structures_graph__["a" /* Graph */]();
  let start = g.addNode();
  loop(5)(() => g.addNode(undefined, start));
  return g;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = seedGraph;


const loop = loopCount => callback => {
  if (loopCount > 0) {
    callback();
    loop (loopCount - 1) (callback);
  }
};


/***/ })
/******/ ]);