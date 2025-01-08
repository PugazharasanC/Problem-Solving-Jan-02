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
