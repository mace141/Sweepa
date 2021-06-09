import CDLinkedList from './circular_doubly_linked_list';

class FibonacciHeap {
  constructor() {
    this.min = null;
    this.count = 0;
    this.rootList = new CDLinkedList();
  }

  insert(node) {
    node.degree = 0;
    node.parent = null;
    node.childList = null;
    node.mark = false;

    if (this.min == null) {
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
      if (minNode.childList) {
        minNode.childList.toArray().forEach(child => {
          this.rootList.insert(child, false);
          child.parent = null;
        });
      }

      this.rootList.remove(minNode);

      if (minNode == minNode.next) {
        this.min = null;
      } else {
        this.min = minNode.next;
        this.consolidate();
      }

      this.count--;
    }

    return minNode;
  }

  consolidate() {
    const arr = new Array(this.count + 1).fill(null);
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

    for (let i = 0; i <= this.count; i++) {
      if (arr[i]) {
        if (!this.min) {
          this.rootList = new CDLinkedList();
          this.min = arr[i];
        } else {
          this.rootList.insert(arr[i]);
          if (arr[i].key < this.min.key) {
            this.min = arr[i];
          }
        }
      }
    }
  }

  link(nodeY, nodeX) {
    this.rootList.remove(nodeY);

    if (!nodeX.childList) nodeX.childList = new CDLinkedList(); 

    nodeX.childList.insert(nodeY, false);
    nodeY.parent = nodeX;

    const tallestChild = nodeX.childList.toArray().reduce((a, b) => (
      a.degree > b.degree ? a : b
    ));
    nodeX.degree = 1 + tallestChild.degree;

    nodeY.mark = false;    
  }

  decreaseKey(node, newKey) {
    node.key = newKey;
    const parent = node.parent;
    
    if (parent && node.key < parent.key) {
      this.cut(node, parent);
      this.cascadingCut(parent);
    }
    
    if (node.key < this.min.key) {
      this.min = node;
    }
  }

  cut(nodeX, nodeY) {
    nodeY.childList.remove(nodeX);
    
    const tallestChild = nodeY.childList.toArray().reduce((a, b) => (
      a.degree > b.degree ? a : b
    ));
    nodeY.degree = 1 + tallestChild.degree;

    this.rootList.insert(nodeX);
    nodeX.parent = null;
    nodeX.mark = false;
  }

  cascadingCut(node) {
    if (node && node.parent) {
      if (node.mark == false) {
        node.mark = true;
      } else {
        this.cut(node, node.parent);
        this.cascadingCut(node.parent);
      }
    }
  }
}

export default FibonacciHeap;