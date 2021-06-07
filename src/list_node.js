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

export default ListNode;