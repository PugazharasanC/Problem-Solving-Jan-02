//? Day 5: Trees, Binary Search Trees (BST), and Recursion
//* Key Topics: Trees, binary search trees (BST), tree traversals, recursion techniques.
//? Session Focus:
//* Learn about binary trees and binary search trees: traversals (pre-order, in-order, post-order), finding LCA (lowest common ancestor), and tree height.
//* Recursive approaches for tree-related problems.
//? Session Practice Questions:
//? Find the height of a binary tree.
//? Perform a pre-order traversal of a binary tree.
//? Check if a binary tree is a binary search tree (BST).
//? Find the lowest common ancestor (LCA) of two nodes in a BST.
//! Count the number of leaf nodes in a binary tree.
//? Post-Session Practice Questions:
// // Perform an in-order traversal iteratively.
// // Find the diameter of a binary tree.
// // Check if two binary trees are identical.
// // Convert a binary tree to a doubly linked list.
// // Construct a binary tree from its inorder and preorder traversals.
// // Print all nodes at k distance from the root.
// // Serialize and deserialize a binary tree.
// // Find the level with the maximum sum in a binary tree.
// // Calculate the depth of the deepest leaf node.
// // Convert a BST to a balanced BST.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    console.log("Empty BST Created");
  }

  insertNode(root, data) {
    if (root === null) return new Node(data);

    if (data === root.data) {
      console.log("Duplicate data found");
      return root;
    }

    if (data < root.data) {
      root.left = this.insertNode(root.left, data);
    } else {
      root.right = this.insertNode(root.right, data);
    }

    return root;
  }

  insert(data) {
    this.root = this.insertNode(this.root, data);
  }

  preorder(root = this.root) {
    if (root != null) {
      console.log(root.data);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inorder(root = this.root) {
    if (root != null) {
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.right);
    }
  }

  postorder(root = this.root) {
    if (root != null) {
      this.postorder(root.left);
      this.postorder(root.right);
      res.push(root.data);
    }
  }

  findHeight(root = this.root) {
    if (root == null) return -1;
    return Math.max(
      1 + this.findHeight(root.left),
      1 + this.findHeight(root.right)
    );
  }
  alterIt(root = this.root) {
    if (root == null) return;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    this.alterIt(root.left);
    this.alterIt(root.right);
  }
  checkBST(root = this.root) {
    if (root == null) return true;
    if (root.left != null && root.left.data > root.data) return false;
    if (root.right != null && root.right.data < root.data) return false;
    return this.checkBST(root.left) && this.checkBST(root.right);
  }

  lca(data1, data2, root = this.root) {
    if (data1 > data2) return this.lca(data2, data1, root);
    if (root == null) return -1;
    if (
      root.data == data1 ||
      root.data == data2 ||
      (root.data > data1 && root.data < data2)
    )
      return root.data;
    if (root.data > data1 && root.data > data2)
      return this.lca(data1, data2, root.left);
    if (root.data < data1 && root.data < data2)
      return this.lca(data1, data2, root.right);
  }

  countLeaf(root = this.root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) return 1;
    return this.countLeaf(root.left) + this.countLeaf(root.right);
  }
}

const tree = new BST();
for (let i = 0; i < 20; i++) {
  const x = Math.floor(Math.random() * 100);
  tree.insert(x);
}
tree.inorder();
