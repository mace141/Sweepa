class CDLinkedList {
  constructor() {
    this.head = null;
    this.min = null;
  }

  peek() {
    return this.head;
  }

  insert(newNode) {
    if (this.head) {
      const lastNode = this.head.prev;

      newNode.prev = lastNode;
      newNode.next = this.head;

      this.head.prev = newNode;
      lastNode.next = newNode;

      if (this.min.key > newNode.key) {
        this.min = newNode;
      }
    } else {
      this.head = newNode;
      this.min = newNode;
      newNode.prev = newNode;
      newNode.next = newNode;
    }
  }

  remove(node) {
    node.remove();

    if (this.head === node) {
      this.head = node.next;
    }
  }

  toArray() {
    const arr = [this.head];
    let node = this.head.next;

    while (node != this.head) {
      arr.push(node);
      node = node.next;
    }
    
    return arr;
  }
}

export default CDLinkedList;