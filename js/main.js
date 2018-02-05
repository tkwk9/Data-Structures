import * as LL from '../data_structures/linked_list';
import {TreeNode} from '../data_structures/tree_node';
import {BSTNode} from '../data_structures/bst_node';
import {MinHeap, MaxHeap} from '../data_structures/heap';

$( () => {
  window.LinkedList = LL.LinkedList;
  window.LinkedListNode = LL.LinkedListNode;
  window.TreeNode = TreeNode;
  window.BSTNode = BSTNode;
  window.MinHeap = MinHeap;
  window.MaxHeap = MaxHeap;

  window.root = new TreeNode("root");

  window.root.addChild(new TreeNode("child1"));
  window.root.addChild(new TreeNode("child2"));
  window.root.addChild(new TreeNode("child3"));

  window.root.children[0].addChild(new TreeNode('child1-1'));
  window.root.children[0].addChild(new TreeNode('child1-2'));
  window.root.children[1].addChild(new TreeNode('child2-1'));

});
