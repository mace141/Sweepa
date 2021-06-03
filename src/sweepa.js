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
    this.dir = dirDeltas[Math.floor(Math.random() * 8)];
  }

  cleanStep() {
    let nextNode = this.currNode.neighbors[this.dir];

    if (nextNode) {
      this.currNode = nextNode;
      nextNode = this.currNode.neighbors[this.dir];

      this.replaceSweepa();
    } else { 
      this.dir = dirDeltas[Math.floor(Math.random() * 8)];
    }
  }

  beginCleaning() {
    const sweepaSeq = setInterval(() => {
      this.cleanStep();
    }, 200);

    setTimeout(() => {
      clearInterval(sweepaSeq);
      this.beginDocking();
    }, 10000);
  }

  replaceSweepa() {
    const lastDiv = document.getElementsByClassName('sweepa')[0];
    const nextDiv = document.getElementById(this.currNode.value);

    lastDiv.innerHTML = "";
    lastDiv.classList.toggle('sweepa');

    nextDiv.classList.toggle('sweepa');
    nextDiv.append(document.createElement('div'));
  }

  markVisited(node) {
    const visitedNode = document.getElementById(node);
    visitedNode.classList.toggle('visited');
    visitedNode.classList.toggle('unvisited');
  }

  closestNode(nodes, distance) {
    const closestNode = nodes.reduce((minNode, node) => (
      distance[node] < distance[minNode] ? node : minNode
    ));
    return closestNode;
  }

  async dijkstras(graphList, start, destination) {
    let distance = {};
    for (let node in graphList) {
      distance[node] = Infinity;
    }
    distance[start] = 0;

    let unvisited = new Set(Object.keys(graphList));
    let previous = {};
    
    while (unvisited.has(destination)) {
      let currNode = this.closestNode(Array.from(unvisited), distance);
      unvisited.delete(currNode);

      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.markVisited(currNode));
        }, 50);
      });

      if (currNode == destination) return { distance, previous };
      
      for (let neighbor in graphList[currNode]) {
        let distFromCurrToNeighbor = graphList[currNode][neighbor];
        let distFromSourceToNeighbor = distance[currNode] + distFromCurrToNeighbor;
        
        if (distance[neighbor] > distFromSourceToNeighbor) {
          distance[neighbor] = distFromSourceToNeighbor;
          previous[neighbor] = currNode;
        }
      }
    }
    
    return { distance, previous };
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
    return;
  }

  homeStep() {
    let nextNode = this.path[0];
    
    if (nextNode) {
      const pos = nextNode.split('-');
      this.currNode = this.graphArr[pos[0]][pos[1]];
      this.replaceSweepa();
      this.path.shift();

      const stepHome = document.getElementById(nextNode);
      stepHome.classList.add('return');
    }
    
    return;
  }

  async homeSequence() {
    while (this.currNode.value != this.homeNode.value) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.homeStep());
        }, 100);
      });
    }

    this.grid.toggleEdit();
  }

  beginDocking() {
    this.dijkstras(
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