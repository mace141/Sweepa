import ListNode from './list_node';

class CDLinkedList {
  constructor() {
    this.head = null;
    this.min = null;
  }

  peek() {
    return this.head;
  }

  append(newNode) {
    const oldPrev = this.head.prev;

    newNode.next = this.head;
    newNode.prev = oldPrev;

    this.head.prev = newNode;
    oldPrev.next = newNode;
  }

  remove() {
    this.min.remove();
  }
}

export default CDLinkedList;