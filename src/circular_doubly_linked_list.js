class CDLinkedList {
  constructor() {
    this.head = null;
    this.min = null;
  }

  peek() {
    return this.head;
  }

  insert(newNode, prepend) {
    if (this.head) {
      const lastNode = this.head.prev;

      newNode.prev = lastNode;
      newNode.next = this.head;

      this.head.prev = newNode;
      lastNode.next = newNode;

      if (prepend) {
        this.head = newNode;
      }

      if (this.min.key > newNode.key) {
        this.min = newNode;
      }
    }

    this.head = newNode;
    this.min = newNode;
    newNode.prev = newNode;
    newNode.next = newNode;
  }

  remove(node) {
    node.remove();

    if (this.head == node) {
      this.head = node.next;
    }
  }

  toArray() {
    const arr = [];
    let node = this.head.prev;

    while (node != this.head) {
      node = node.next;
      arr.push(node);
    }
    
    return arr;
  }
}

export default CDLinkedList;