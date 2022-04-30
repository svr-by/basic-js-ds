const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addInside(this.rootNode, data);

    function addInside(node, value){
      if(!node){
        return new Node(value);
      }
      if(node.data === value){
        return node;
      }
      if(value < node.data){
        node.left = addInside(node.left, value);
      }
      if(value > node.data){
        node.right = addInside(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    return searchInside(this.rootNode, data);

    function searchInside(node, value){
      if(!node){
        return false;
      }
      if(node.data === value){
        return true;
      }
      if(value < node.data){
        return searchInside(node.left, value);
      }
      if(value > node.data){
        return searchInside(node.right, value);
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.rootNode) return;

    let minNode = this.rootNode;
    while(minNode.left){
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    if(!this.rootNode) return;

    let maxNode = this.rootNode;
    while(maxNode.right){
        maxNode = maxNode.right;
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};