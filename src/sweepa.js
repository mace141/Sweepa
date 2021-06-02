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
  constructor(homeNode, graphArr, graphList) {
    this.homeNode = homeNode;
    this.graphArr = graphArr;
    this.graphList = graphList;
    this.currNode = homeNode;
    this.dir = dirDeltas[Math.floor(Math.random() * 8)];
  }

  step() {
    let nextNode = this.currNode.neighbors[this.dir];

    if (nextNode) {
      this.currNode = nextNode;
      nextNode = this.currNode.neighbors[this.dir];

      this.replaceSweepa();
    } else { 
      this.dir = dirDeltas[Math.floor(Math.random() * 8)];
    }
  }

  replaceSweepa() {
    const lastDiv = document.getElementsByClassName('sweepa')[0];
    const nextDiv = document.getElementById(this.currNode.value);

    lastDiv.innerHTML = "";
    lastDiv.classList.toggle('sweepa');

    nextDiv.classList.toggle('sweepa');
    nextDiv.append(document.createElement('span'));
  }

  closestNode(nodes, distance) {
    return nodes.reduce((minNode, node) => (
      distance[node] < distance[minNode] ? node : minNode
    ));
  }

  dijkstras(graphList, start, destination) {
    let distance = {};
    for (let node in graphList) {
      distance[node] = Infinity;
    }
    distance[start] = 0;

    let unvisited = new Set(Object.keys(graphList));
    let previous = {};

    while (unvisited.size > 0) {
      let currNode = closestNode(Array.from(unvisited), distance);
      unvisited.delete(currNode);
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

  retracePaths(previous) {
    let path = [this.currNode];
    let lastNode;
    let nextNode;

    while (!path.includes(this.homeNode)) {
      lastNode = path[path.length - 1]
      nextNode = previous[lastNode];
      path.push(nextNode);
    }

    return path;
  }

  beginDocking() {
    const { previous } = this.dijkstras(this.graphList, this.currNode, this.homeNode);
    const path = this.retraceSteps(previous);


  }
}

export default Sweepa;