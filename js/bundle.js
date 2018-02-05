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


$( () => {
  window.LinkedList = __WEBPACK_IMPORTED_MODULE_0__data_structures_linked_list__["a" /* LinkedList */];
  window.LinkedListNode = __WEBPACK_IMPORTED_MODULE_0__data_structures_linked_list__["b" /* LinkedListNode */];
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



/***/ })
/******/ ]);