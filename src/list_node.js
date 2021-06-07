class ListNode {
  constructor(key = null, val = null) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }

  remove() {
    const prevNode = this.prev;
    const nextNode = this.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    return this;
  }
}

export default ListNode;