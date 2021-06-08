import CDLinkedList from './circular_doubly_linked_list';

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
      minNode.childList.toArray().forEach(child => {
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

  consolidate() {
    const arr = new Array(this.count).fill(null);
    let degree;

    for (let nodeX of this.rootList.toArray()) {
      degree = nodeX.degree;

      while (arr[degree]) {
        let nodeY = arr[degree];

        if (nodeX.key > nodeY.key) {
          [nodeX, nodeY] = [nodeY, nodeX];
        }

        this.link(nodeY, nodeX);
        arr[degree] = null;
        degree++;
      }

      arr[degree] = nodeX;
    }

    this.min = null;

    for (let i = 0; i < this.count; i++) {
      if (arr[i]) {
        this.insert(arr[i]);
        this.count--;
      }
    }
  }

  link(nodeY, nodeX) {
    this.rootList.remove(nodeY);

    if (nodeX.childList) {
      nodeX.childList.insert(nodeY, false);
      nodeX.degree++;
    }
    
    nodeY.mark = false;    
  }
}

export default FibonacciHeap;