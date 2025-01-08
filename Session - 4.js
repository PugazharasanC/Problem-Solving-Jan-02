//? Day 4: Stacks, Queues, and Linked Lists
//* Key Topics: Stacks, queues, linked lists, and related operations.
//? Session Focus:
//* Learn stack and queue operations: implementing stacks using arrays, checking for balanced parentheses, and reversing strings using stacks.
//* Linked list operations: insertion, deletion, reversing, and detecting cycles in linked lists.
//? Session Practice Questions:
//! Implement a stack using an array.
//! stack
class Stack {
  constructor(size = +Infinity) {
    this._stack = [];
    this._size = size;
    this.top = -1;
  }

  isFull() {
    return this.top + 1 == this._size;
  }

  isEmpty() {
    return this.top == -1;
  }

  push(value) {
    if (this.isFull()) {
      throw new Error("Stack Overflow");
    }
    this._stack[++this.top] = value;
    return this.top;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    return this._stack[this.top--];
  }

  peek() {
    return this._stack[this.top];
  }
}

//! Reverse a string using a stack.
function reverse(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  const reversed = [];
  while (stack.length) {
    reversed.push(stack.pop());
  }
  return reversed.join("");
}

// console.log(reverse("This is pugazh"))
// console.log(reverse("GUVI GEEKS NETWORK"))
//! Check for balanced parentheses in an expression.
function checkBalanced(str) {
  const stack = [];
  for (let ind = 0; ind < str.length; ind++) {
    if (str[ind] === "(" || str[ind] === "[" || str[ind] == "{") {
      stack.push(str[ind]);
    } else if (str[ind] === ")" || str[ind] === "]" || str[ind] == "}") {
      if (stack.length == 0) return false;
      const top = stack.pop();
      if (top == "(" && str[ind] != ")") return false;
      if (top == "[" && str[ind] != "]") return false;
      if (top == "{" && str[ind] != "}") return false;
    }
  }
  return stack.length == 0;
}

// console.log(checkBalanced("({)}({)()}"));
// console.log(checkBalanced("{[a+b]*(x+y)}")); // Expected output: true
// console.log(
//   checkBalanced("(((") // Expected output: false
// );
// console.log(
//   checkBalanced("((()))") // Expected output: true
// );
//! Insert a node at the beginning of a linked list.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.list = null;
  }

  insertNode(value, insertFirst = true) {
    if (insertFirst) this.insertAtFirst(value);
    else this.insertAtLast(value);
  }

  insertAtFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.list;
    this.list = newNode;
  }

  insertAtLast(value) {
    if (this.list == null) {
      this.list = new Node(value);
    } else {
      let temp = this.list;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = new Node(value);
    }
  }
  deleteLastNode() {
    if (this.list == null) {
      return -1;
    } else if (this.list.next == null) {
      this.list = null;
    } else {
      let temp = this.list;
      while (temp.next.next != null) {
        temp = temp.next;
      }
      temp.next = null;
    }
  }

  middleElement() {
    let slow = this.list;
    let fast = this.list;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow?.data;
  }

  dedectCycle() {
    if (this.list == null) return false;
    let slow = this.list;
    let fast = this.list;
    do {
      slow = slow.next;
      fast = fast.next.next;
    } while (slow != fast && fast != null && fast.next != null);
    return slow == fast;
  }
  makeCycle() {
    let temp = this.list;
    let x = null;
    while (temp.next != null) {
      if (Math.random() < 0.3) {
        x = temp;
      }
      temp = temp.next;
    }
    temp.next = x;
    return x;
  }
  print() {
    const data = [];
    let temp = this.list;
    while (temp) {
      data.push(temp.data);
      temp = temp.next;
    }
    console.log(data.join(" -> "));
  }
}

//! Delete the last node in a linked list.
//! Find the middle element of a linked list.
//! Detect a cycle in a linked list using fast and slow pointers.
//? Post-Session Practice Questions:
// // Reverse a linked list iteratively.
// // Merge two sorted linked lists.
// // Remove duplicates from a sorted linked list.
// // Check if a linked list is a palindrome.
// // Implement a priority queue.
// // Reverse the first k elements of a queue.
// // Implement a circular queue.
// // Find the middle element of a linked list.
// // Clone a linked list with random pointers.
