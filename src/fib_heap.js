import CDLinkedList from './circular_doubly_linked_list';

// roots of all trees are linked using a circular doubly linked list

class FibonacciHeap {
  constructor() {
    this.min = null;
    this.count = 0;
    this.rootList = null;
  }

  insert(node) {
    node.degree = 0;
    node.parent = null;
    node.child = null;
    node.mark = false;

    if (this.min == null) {
      this.rootList = new CDLinkedList();
      this.rootList.insert(node, false);
      this.min = node;
    } else {
      this.rootList.insert(node, false);
      if (node.key < this.min.key) {
        this.min = node;
      }
    }

    this.count++;
  }

  extractMin() {
    const minNode = this.min;

    if (minNode) {
      minNode.child.forEach(child => {
        this.rootList.insert(child, false);
        child.parent = null;
      });

      this.rootList.remove(minNode);

      if (minNode == minNode.next) {
        this.min = null;
      } else {
        this.min = this.rootList.min;
        this.consolidate();
      }

      this.count--;
    }

    return minNode;
  }
}

export default FibonacciHeap;