import MinHeap from './min_heap';

const dirDeltas = [
  [-1,  0],
  [-1,  1],
  [ 0,  1],
  [ 1,  1],
  [ 1,  0],
  [ 1, -1],
  [ 0, -1],
  [-1, -1]
];

const deltaIndices = {
  '[-1,0]': 0,
  '[-1,1]': 1,
  '[0,1]': 2,
  '[1,1]': 3,
  '[1,0]': 4,
  '[1,-1]': 5,
  '[0,-1]': 6,
  '[-1,-1]': 7
};

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
    this.cleaningIdx = grid.cleaningIdx;
    this.dockingIdx = grid.dockingIdx;
    
    this.cleaningAlgos = [this.randomDir.bind(this), this.clockwiseDir.bind(this)];
    this.dockingAlgos = [this.heapDijkstras.bind(this), this.aStar.bind(this), this.greedyBestFirst.bind(this)];
    
    this.dir = [-1, 0];
    this.cleanDuration = 20000;
    this.moveSpeed = 30;
    this.searchSpeed = 25;

    this.attachEvents();
  }

  attachEvents() {
    const cleanDuration = document.getElementById('cleaning-duration');
    const seconds = document.getElementById('seconds')
    const moveSpeed = document.getElementById('move-speed');
    const searchSpeed = document.getElementById('search-speed');

    cleanDuration.addEventListener('input', e => {
      this.cleanDuration = parseInt(e.target.value) * 1000;
      seconds.innerHTML = e.target.value;
    });

    moveSpeed.addEventListener('input', e => {
      this.moveSpeed = 100 - ((parseInt(e.target.value) - 1) * 10);
    });

    searchSpeed.addEventListener('input', e => {
      this.searchSpeed = 50 - ((parseInt(e.target.value) - 1) * 5);
    });
  }

  setGrid(grid) {
    this.grid = grid;
    this.homeNode = grid.homeNode;
    this.graphArr = grid.graphArr;
    this.graphList = grid.graphList;
    this.currNode = grid.homeNode;
    this.nodes = grid.nodes;
    this.dockingIdx = grid.dockingIdx;
    this.cleaningIdx = grid.cleaningIdx;
  }
  
  async beginCleaning() {
    const startTime = Date.now();
    let currTime = Date.now();
    let duration = this.cleanDuration;

    while ((currTime - startTime) < duration) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.cleanStep());
        }, this.moveSpeed);
      });

      currTime = Date.now();
      duration = this.cleanDuration;
    }

    this.beginDocking();
  }

  cleanStep() {
    let nextNode = this.currNode.neighbors[this.dir];
    const nextDir = this.cleaningAlgos[this.cleaningIdx];

    if (nextNode) {
      this.currNode = nextNode;
      nextNode = this.currNode.neighbors[this.dir];

      this.replaceSweepa(true);
    } else { 
      nextDir();
    }
  }

  randomDir() {
    this.dir = dirDeltas[Math.floor(Math.random() * 8)];
  }

  clockwiseDir() {
    if (Math.random() < 0.75) {
      const lastDirIdx = deltaIndices[JSON.stringify(this.dir)];
      
      this.dir = lastDirIdx == 7 ? [-1, 0] : dirDeltas[lastDirIdx + 1];
    } else {
      this.randomDir();
    }
  }

  beginDocking() {
    const dockingAlgo = this.dockingAlgos[this.dockingIdx];

    dockingAlgo(
      this.graphList, this.currNode.value, this.homeNode.value
    ).then(res => {
      const { cameFrom } = res;
      this.retracePath(cameFrom);
    }).then(() => {
      setTimeout(() => {
        this.homeSequence();
      }, 1250)
    });
  }
  
  retracePath(cameFrom) {
    let path = [this.homeNode.value];
    let lastNode;
    let nextNode;
    
    while (!path.includes(this.currNode.value)) {
      lastNode = path[0]
      nextNode = cameFrom[lastNode];
      path.unshift(nextNode);
    }
    
    this.path = path;
  }
  
  async homeSequence() {
    while (this.currNode.value != this.homeNode.value) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.homeStep());
        }, this.moveSpeed);
      });
    }

    this.grid.toggleEdit();
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

  replaceSweepa(cleaning) {
    const lastDiv = document.getElementsByClassName('sweepa')[0];
    const nextDiv = document.getElementById(this.currNode.value);

    lastDiv.classList.remove('sweepa');
    nextDiv.classList.add('sweepa');
    
    if (cleaning) {
      nextDiv.classList.add('swept');
    }
  }
  
  octileDist(current, destination) {
    const startPos = current.split('-');
    const destPos = destination.split('-');
    const d1 = 1;
    const d2 = Math.sqrt(2);
    const dy = Math.abs(destPos[0] - startPos[0]);
    const dx = Math.abs(destPos[1] - startPos[1]);

    return d1 * (dx + dy) + (d2 - 2 * d1) * Math.min(dx, dy);
  }

  markVisited(node) {
    const visitedNode = document.getElementById(node);
    visitedNode.classList.add('visited');
    visitedNode.classList.remove('unvisited');
  }

  pathDirection(lastPosVal, nextPosVal) {
    const lastPosArr = lastPosVal.split('-');
    const nextPosArr = nextPosVal.split('-');

    const dirX = parseInt(nextPosArr[0]) - parseInt(lastPosArr[0]);
    const dirY = parseInt(nextPosArr[1]) - parseInt(lastPosArr[1]);

    return [dirX, dirY];
  }

  async heapDijkstras(graphList, start, destination) {
    const frontier = new MinHeap();
    const cameFrom = {};
    const distance = {};
    for (let node in this.nodes) {
      if (node == start) {
        distance[start] = 0;
        this.nodes[start].key = 0;
        frontier.insert(this.nodes[start]);
      } else {
        distance[node] = Infinity;
        this.nodes[node].key = Infinity;
      }
    }

    // let lastNode;
    // let currDir;
    
    while (!frontier.empty()) {
      const minNode = frontier.extractMin();
      const currNodeVal = minNode.value;
      
      // if (!currDir) {
      //   currDir = [0, 0];
      // } else {
      //   currDir = this.pathDirection(lastNode, currNodeVal);
      // }

      // lastNode = currNodeVal;

      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.markVisited(currNodeVal));
        }, this.searchSpeed);
      });
      
      if (currNodeVal == destination) return { distance, cameFrom };
      
      for (let neighbor in graphList[currNodeVal]) {
        let distFromCurrToNeighbor = graphList[currNodeVal][neighbor];
        let distFromSourceToNeighbor = distance[currNodeVal] + distFromCurrToNeighbor;
        
        if (distance[neighbor] > distFromSourceToNeighbor) {
          distance[neighbor] = distFromSourceToNeighbor;
          cameFrom[neighbor] = currNodeVal;

          // const neighborDir = this.pathDirection(
          //   currNodeVal, neighbor
          // );

          // if (JSON.stringify(currDir) != JSON.stringify(neighborDir)) {
          //   this.nodes[neighbor].key = distFromSourceToNeighbor + 0.1;
          // } else {
            this.nodes[neighbor].key = distFromSourceToNeighbor;
          // }

          frontier.insert(this.nodes[neighbor]);
        }
      }
    }
    
    return { distance, cameFrom };
  }

  async greedyBestFirst(graphList, start, destination) {
    const frontier = new MinHeap();
    this.nodes[start].key = 0;
    frontier.insert(this.nodes[start]);

    const cameFrom = {};
    cameFrom[start] = null;

    while (!frontier.empty()) {
      const minNode = frontier.extractMin();
      const currNodeVal = minNode.value;

      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.markVisited(currNodeVal));
        }, this.searchSpeed);
      });

      if (currNodeVal == destination) return { cameFrom };

      for (let neighbor in graphList[currNodeVal]) {
        if (!Object.keys(cameFrom).includes(neighbor)) {
          const heuristic = this.octileDist(neighbor, destination);
          this.nodes[neighbor].key = heuristic;
          frontier.insert(this.nodes[neighbor]);
          cameFrom[neighbor] = currNodeVal;
        }
      }
    }

    return { cameFrom };
  }

  async aStar(graphList, start, destination) {
    const frontier = new MinHeap();
    const cameFrom = {};
    const gScore = {};
    for (let node in this.nodes) {
      if (node == start) {
        gScore[start] = 0;
        this.nodes[start].key = 0;
        frontier.insert(this.nodes[start]);
      } else {
        gScore[node] = Infinity;
        this.nodes[node].key = Infinity;
      }
    }
    
    while (!frontier.empty()) {
      const minNode = frontier.extractMin();
      const currNodeVal = minNode.value;
      
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.markVisited(currNodeVal));
        }, this.searchSpeed);
      });
      
      if (currNodeVal == destination) return { gScore, cameFrom };
      
      for (let neighbor in graphList[currNodeVal]) {
        let distFromCurrToNeighbor = graphList[currNodeVal][neighbor];
        let distFromSourceToNeighbor = gScore[currNodeVal] + distFromCurrToNeighbor;
        
        if (gScore[neighbor] > distFromSourceToNeighbor) {
          gScore[neighbor] = distFromSourceToNeighbor;
          cameFrom[neighbor] = currNodeVal;

          const fScore = this.octileDist(neighbor, destination);
          this.nodes[neighbor].key = distFromSourceToNeighbor + fScore;
          frontier.insert(this.nodes[neighbor]);
        }
      }
    }
    
    return { gScore, cameFrom };
  }
}

export default Sweepa;