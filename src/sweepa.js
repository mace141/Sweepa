import MinHeap from './min_heap';

const dirDeltas = [
  [-1, -1],
  [-1,  0],
  [-1,  1],
  [ 0,  1],
  [ 1,  1],
  [ 1,  0],
  [ 1, -1],
  [ 0, -1]
];

const cardinalDeltas = {
  'up':        [-1,  0],
  'right':     [ 0,  1],
  'down':      [ 1,  0],
  'left':      [ 0, -1],
};

const diagDeltas = {
  'upright':   [-1,  1],
  'downright': [ 1,  1],
  'downleft':  [ 1, -1],
  'upleft':    [-1, -1]
};

class Sweepa { 
  constructor(grid) {
    this.grid = grid;
    this.homeNode = grid.homeNode;
    this.graphArr = grid.graphArr;
    this.graphList = grid.graphList;
    this.currNode = grid.homeNode;
    this.nodes = grid.nodes;
    this.dir = dirDeltas[Math.floor(Math.random() * 8)];
    this.dockingIdx = 0;
    this.dockingAlgos = [this.heapDijkstras];
  }

  cleanStep() {
    let nextNode = this.currNode.neighbors[this.dir];

    if (nextNode) {
      this.currNode = nextNode;
      nextNode = this.currNode.neighbors[this.dir];

      this.replaceSweepa(true);
    } else { 
      this.dir = dirDeltas[Math.floor(Math.random() * 8)];
    }
  }

  beginCleaning() {
    const sweepaSeq = setInterval(() => {
      this.cleanStep();
    }, 25);

    setTimeout(() => {
      clearInterval(sweepaSeq);
      this.beginDocking();
    }, 2000);
  }

  replaceSweepa(cleaning) {
    const lastDiv = document.getElementsByClassName('sweepa')[0];
    const nextDiv = document.getElementById(this.currNode.value);

    lastDiv.classList.remove('sweepa');
    nextDiv.classList.add('sweepa');
    
    if (cleaning) {
      nextDiv.classList.add('swept');
    }
  }

  markVisited(node) {
    const visitedNode = document.getElementById(node);
    visitedNode.classList.add('visited');
    visitedNode.classList.remove('unvisited');
  }

  closestNode(nodes, distance) {
    const closestNode = nodes.reduce((minNode, node) => (
      distance[node] < distance[minNode] ? node : minNode
    ));
    return closestNode;
  }

  async heapDijkstras(graphList, start, destination) {
    const minHeap = new MinHeap();
    const previous = {};
    const distance = {};
    for (let node in this.nodes) {
      if (node == start) {
        distance[node] = 0;
        this.nodes[node].key = 0;
        minHeap.insert(this.nodes[node]);
      } else {
        distance[node] = Infinity;
        this.nodes[node].key = Infinity;
      }
    }
    
    while (minHeap.array.length > 1) {
      let minNode = minHeap.extractMin();
      let currNode = minNode.value;
      
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.markVisited(currNode));
        }, 10);
      });
      
      if (currNode == destination) return { distance, previous };
      
      for (let neighbor in graphList[currNode]) {
        let distFromCurrToNeighbor = graphList[currNode][neighbor];
        let distFromSourceToNeighbor = distance[currNode] + distFromCurrToNeighbor;
        
        if (distance[neighbor] > distFromSourceToNeighbor) {
          distance[neighbor] = distFromSourceToNeighbor;
          previous[neighbor] = currNode;

          this.nodes[neighbor].key = distFromSourceToNeighbor;
          minHeap.insert(this.nodes[neighbor]);
        }
      }
    }
    
    return { distance, previous };
  }

  octileDist(start, destination) {
    const startPos = start.split('-');
    const destPos = destination.split('-');
    const d1 = 1;
    const d2 = Math.sqrt(2);
    const dy = Math.abs(destPos[0] - startPos[0]);
    const dx = Math.abs(destPos[1] - startPos[1]);

    return d1 * (dx + dy) + (d2 - 2 * d1) * Math.min(dx, dy);
  }

  retracePath(previous) {
    let path = [this.homeNode.value];
    let lastNode;
    let nextNode;
    
    while (!path.includes(this.currNode.value)) {
      lastNode = path[0]
      nextNode = previous[lastNode];
      path.unshift(nextNode);
    }
    
    this.path = path;
  }

  homeStep() {
    let nextNode = this.path[0];
    
    if (nextNode) {
      const pos = nextNode.split('-');
      this.currNode = this.graphArr[pos[0]][pos[1]];
      this.replaceSweepa(false);
      this.path.shift();

      const stepHome = document.getElementById(nextNode);
      stepHome.classList.add('return');
    } 
  }

  async homeSequence() {
    while (this.currNode.value != this.homeNode.value) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.homeStep());
        }, 25);
      });
    }

    this.grid.toggleEdit();
  }

  beginDocking() {
    this.heapDijkstras(
      this.graphList, this.currNode.value, this.homeNode.value
    ).then(res => {
      const { previous } = res;
      this.retracePath(previous);
    }).then(() => {
      this.homeSequence();
    });
  }
}

export default Sweepa;