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

      newNode.next = this.head;
      newNode.prev = lastNode;

      lastNode.next = newNode;
      this.head.prev = newNode;

      if (prepend) {
        this.head = newNode;
      }

      if (this.min.value > newNode.value) {
        this.min = newNode;
      }
    }

    this.head = newNode;
    this.min = newNode;
    newNode.next = newNode;
    newNode.prev = newNode;
  }

  remove() {
    this.min.remove();
  }
}

export default CDLinkedList;