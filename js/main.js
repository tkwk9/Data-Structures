import * as LL from '../data_structures/linked_list';
import { TreeNode } from '../data_structures/tree_node';
import { BSTNode } from '../data_structures/bst_node';
import { MinHeap, MaxHeap } from '../data_structures/heap';
import { Graph } from '../data_structures/graph';
import { dijkstra } from '../data_structures/dijkstra';
import * as Seed from './seed';

$(() => {
  window.LinkedList = LL.LinkedList;
  window.LinkedListNode = LL.LinkedListNode;
  window.TreeNode = TreeNode;
  window.BSTNode = BSTNode;
  window.MinHeap = MinHeap;
  window.MaxHeap = MaxHeap;
  window.Graph = Graph;
  window.dijkstra = dijkstra;

  window.g = Seed.seedGraph();

  window.root = new TreeNode('root');

  window.root.addChild(new TreeNode('child1'));
  window.root.addChild(new TreeNode('child2'));
  window.root.addChild(new TreeNode('child3'));

  window.root.children[0].addChild(new TreeNode('child1-1'));
  window.root.children[0].addChild(new TreeNode('child1-2'));
  window.root.children[1].addChild(new TreeNode('child2-1'));

  window.flatten = array => {
    if (array.length === 0) return array;

    if (Array.isArray(array[0])) {
      return window.flatten(array[0].concat(array.slice(1)));
    } else {
      return [array[0]].concat(window.flatten(array.slice(1)));
    }
  };
});
