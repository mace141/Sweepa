class FibHeapNode {
  constructor(key = null, val = null) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
    this.parent = null;
    this.childList = null;
    this.degree = 0;
    this.mark = false;
  }

  remove() {
    const prevNode = this.prev;
    const nextNode = this.next;

    nextNode.prev = prevNode;
    prevNode.next = nextNode;

    return this;
  }
}

export default FibHeapNode;