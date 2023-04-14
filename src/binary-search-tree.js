const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  has(data) {
    return this.hasNode(this.root, data);
  }

  find(data) {
    return this.findNode(this.root, data);
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  min() {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }

  insertNode(rootNode, newNode) {
    if (newNode.data < rootNode.data) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
    return rootNode;
  }

   hasNode (rootNode, data) {
      if(!rootNode) {
        return false;
      }
      if (rootNode.data === data) {
        return true;
      }
      return data < rootNode.data ? this.hasNode(rootNode.left, data) : this.hasNode(rootNode.right, data);
    }

  findNode(rootNode, data) {
    if (rootNode === null) {
      return null;
    }

    if (data === rootNode.data) {
      return rootNode;
    } else if (data < rootNode.data) {
      return this.findNode(rootNode.left, data);
    } else {
      return this.findNode(rootNode.right, data);
    }
  }

  removeNode(rootNode, data) {
  if (rootNode === null) {
    return null;
  }

  if (data === rootNode.data) {
    if (rootNode.left === null && rootNode.right === null) {
      return null;
    } else if (rootNode.left === null) {
      return rootNode.right;
    } else if (rootNode.right === null) {
      return rootNode.left;
    } else {
      const minRightNode = this.findMinNode(rootNode.right);
      rootNode.data = minRightNode.data;
      rootNode.right = this.removeNode(rootNode.right, minRightNode.data);
      return rootNode;
    }
  } else if (data < rootNode.data) {
    rootNode.left = this.removeNode(rootNode.left, data);
    return rootNode;
  } else {
    rootNode.right = this.removeNode(rootNode.right, data);
    return rootNode;
  }
}

  findMinNode(rootNode) {
    let currentNode = rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

module.exports = {
  BinarySearchTree
};