class GraphNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
    this.parent = null;
    this.childList = null;
    this.degree = 0;
    this.mark = false;
    this.neighbors = {};
  }

  remove() {
    const prevNode = this.prev;
    const nextNode = this.next;

    nextNode.prev = prevNode;
    prevNode.next = nextNode;

    return this;
  }
}

export default GraphNode;