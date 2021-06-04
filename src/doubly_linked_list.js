class ListNode {
  constructor(key = null, val = null) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }

  remove() {
    const prev_node = this.prev;
    const next_node = this.next;

    prev_node.next = next_node;
    next_node.prev = prev_node;

    return this;
  }
}

class LinkedList {
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  peek() {
    return this.head.next;
  }

  peekLast() {
    return this.tail.prev;
  }

  append(key, val, newNode = null) {
    newNode ||= Node.new(key, val);
    const oldPrev = this.tail.prev;

    newNode.next = this.tail;
    newNode.prev = oldPrev;

    this.tail.prev = newNode;
    oldPrev.next = newNode;
  }

  remove(start = this.head, key) {
    const nextNode = start.next;

    if (nextNode.key == null) {
      return false;
    }

    if (nextNode.key == key) {
      return nextNode.remove();
    } 

    this.remove(nextNode.next, key);
  }
}