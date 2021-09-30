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
  '[-1,0]':  0,
  '[-1,1]':  1,
  '[0,1]':   2,
  '[1,1]':   3,
  '[1,0]':   4,
  '[1,-1]':  5,
  '[0,-1]':  6,
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
    this.unswept = new Set();
    this.swept = new Set();
    
    this.cleaningAlgos = [
      this.randomDir.bind(this), 
      this.clockwiseDir.bind(this)
    ];
    this.dockingAlgos = [
      this.heapDijkstras.bind(this), 
      this.aStar.bind(this), 
      this.greedyBestFirst.bind(this),
      this.breadthFirstSearch.bind(this)
    ];
    
    this.dir = dirDeltas[0];
    this.cleanDuration = 20000;
    this.moveSpeed = 30;
    this.searchSpeed = 25;
    
    this.timeElapsed = 0;
    this.cleaning = false;
    this.paused = false;

    this.attachEvents();
  }

  static enableControls() {
    document.getElementById('clear-grid').classList.remove('disabled');
    document.getElementById('clear-walls').classList.remove('disabled');
    document.getElementById('dijkstras').classList.remove('disabled');
    document.getElementById('a-star').classList.remove('disabled');
    document.getElementById('greedy').classList.remove('disabled');
    document.getElementById('bfs').classList.remove('disabled');
    document.getElementById('random').classList.remove('disabled');
    document.getElementById('clockwise').classList.remove('disabled');
    document.getElementById('smart').classList.remove('disabled');
  }

  static octileDist(current, destination) {
    const startPos = current.split('-');
    const destPos = destination.split('-');
    const d1 = 1;
    const d2 = Math.sqrt(2);
    const dy = Math.abs(destPos[0] - startPos[0]);
    const dx = Math.abs(destPos[1] - startPos[1]);

    return d1 * (dx + dy) + (d2 - 2 * d1) * Math.min(dx, dy);
  }

  attachEvents() {
    const cleanDuration = document.getElementById('cleaning-duration');
    const seconds = document.getElementById('seconds');
    const moveSpeed = document.getElementById('move-speed');
    const searchSpeed = document.getElementById('search-speed');

    cleanDuration.addEventListener('input', e => {
      seconds.innerHTML = e.target.value;
      this.cleanDuration = parseInt(e.target.value) * 1000;
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

  setup(grid) {
    this.unswept = new Set();
    this.swept = new Set();
    this.timeElapsed = 0;
    this.dir = dirDeltas[0];
    this.setGrid(grid);
  }

  pauseCleaning() {
    this.paused = true;
  }

  resumeCleaning() {
    this.paused = false;
    this.cleanDuration -= this.timeElapsed;
    this.beginCleaning();
  }
  
  async beginCleaning() {
    this.timeElapsed = 0;
    this.cleaning = true;
    debugger
    if (this.cleaningIdx === 2) {
      await new Promise(res => {
        this.dir = dirDeltas[0];
        this.scanFrontNeighbors();
        this.smartClean();
        res('cleaning smartly');
      });
    } else { 
      while (this.timeElapsed < this.cleanDuration && !this.paused) {
        await this.cleanStep();
      }
    }
    debugger
    // if (!this.paused) {
    //   this.cleaning = false;
    //   document.getElementById('start-btn').classList.remove('enabled');
    //   this.beginDocking();
    // }
  }

  smartClean() {
    if (this.unswept.size === 0) return;

    this.drawPerimeter();
    // this.smartClean();
  }

  scanFrontNeighbors() {
    const [dy, dx] = this.dir;
    const currVal = this.currNode.value;
    const [cy, cx] = currVal.split('-');
    const newY = parseInt(cy) + dy;
    const newX = parseInt(cx) + dx;
    const frontPosArr = [newY, newX];
    const frontPosVal = frontPosArr.join('-');
    const dirStr = JSON.stringify(this.dir);
    const frontNeighbors = [frontPosVal];

    if (dirStr === '[-1,0]' || dirStr === '[1,0]') {
      frontNeighbors.push(
        newY + '-' + (newX + 1),
        newY + '-' + (newX - 1)
      );
    } else {
      frontNeighbors.push(
        (newY + 1) + '-' + newX,
        (newY - 1) + '-' + newX
      );
    }

    frontNeighbors.forEach(neighborPosVal => {
      if (!this.swept.has(neighborPosVal)) {
        this.unswept.add(neighborPosVal);
      }
    });
  }

  async goStraight() {
    let nextNode = this.currNode.neighbors[this.dir];
    debugger
    while (nextNode && this.unswept.has(nextNode.value)) {
      debugger
      this.unswept.delete(nextNode.value);
      this.swept.add(nextNode.value);
      this.currNode = nextNode;
      nextNode = this.currNode.neighbors[this.dir];
      this.scanFrontNeighbors();
      await this.replaceSweepa(true);
      debugger
    }
  }

  drawPerimeter() {
    let turns = 0;
    let dirIdx = 0;
    let nextNode = this.currNode.neighbors[this.dir];
    debugger
    while (turns < 6) {
      debugger
      this.goStraight();
      debugger
      dirIdx += 2;
      if (dirIdx > 7) {
        dirIdx = 0;
      }
      debugger
      this.dir = dirDeltas[dirIdx];
      turns++;
      nextNode = this.currNode.neighbors[this.dir];
      debugger
    }
  }

  cleanStep() {
    return new Promise((res) => {
      setTimeout(() => {
        let nextNode = this.currNode.neighbors[this.dir];
        const nextDir = this.cleaningAlgos[this.cleaningIdx];
        
        if (nextNode) {
          this.currNode = nextNode;
          nextNode = this.currNode.neighbors[this.dir];
          
          this.replaceSweepa(true);
        } else { 
          nextDir();
        }
        this.timeElapsed += this.moveSpeed;
        res('cleaning');
      }, this.moveSpeed);
    });
  }

  randomDir() {
    this.dir = dirDeltas[Math.floor(Math.random() * 8)];
  }

  clockwiseDir() {
    if (Math.random() < 0.75) {
      const lastDirIdx = deltaIndices[JSON.stringify(this.dir)];
      
      this.dir = lastDirIdx === 7 ? [-1, 0] : dirDeltas[lastDirIdx + 1];
    } else {
      this.randomDir();
    }
  }

  beginDocking() {
    const dockingAlgo = this.dockingAlgos[this.dockingIdx];

    dockingAlgo(
      this.currNode.value, this.homeNode.value, this.graphList
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

    this.cleaning = false;
    
    const startBtn = document.getElementById('start-btn');
    startBtn.classList.remove('pause');
    startBtn.classList.add('enabled');
    startBtn.innerHTML = 'Start';
    
    this.grid.toggleEdit();
    Sweepa.enableControls();
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
    return new Promise(resolve => {
      setTimeout(() => {
        const lastDiv = document.getElementsByClassName('sweepa')[0];
        const nextDiv = document.getElementById(this.currNode.value);
        
        lastDiv.classList.remove('sweepa');
        nextDiv.classList.add('sweepa');
        
        if (cleaning) {
          nextDiv.classList.add('swept');
        }
        resolve('moving')
      }, this.moveSpeed);
    });
  }

  markVisited(node) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('marking visited');
        const visitedNode = document.getElementById(node);
        visitedNode.classList.add('visited');
        visitedNode.classList.remove('unvisited');
      }, this.searchSpeed);
    });
  }

  pathDirection(lastPosVal, nextPosVal) {
    const lastPosArr = lastPosVal.split('-');
    const nextPosArr = nextPosVal.split('-');

    const dirX = parseInt(nextPosArr[0]) - parseInt(lastPosArr[0]);
    const dirY = parseInt(nextPosArr[1]) - parseInt(lastPosArr[1]);

    return [dirX, dirY];
  }

  async heapDijkstras(start, destination, graphList) {
    const frontier = new MinHeap();
    const cameFrom = {};
    const distance = {};
    distance[start] = 0;
    this.nodes[start].key = 0;
    frontier.insert(this.nodes[start]);

    while (!frontier.empty()) {
      const minNode = frontier.extractMin();
      const currNodeVal = minNode.value;

      await this.markVisited(currNodeVal);
      
      if (currNodeVal === destination) return { distance, cameFrom };
      
      for (let neighbor in graphList[currNodeVal]) {
        let distFromCurrToNeighbor = graphList[currNodeVal][neighbor];
        let distFromSourceToNeighbor = distance[currNodeVal] + distFromCurrToNeighbor;
        
        if (!(neighbor in cameFrom) || distance[neighbor] > distFromSourceToNeighbor) {
          distance[neighbor] = distFromSourceToNeighbor;
          cameFrom[neighbor] = currNodeVal;

          this.nodes[neighbor].key = distFromSourceToNeighbor;
          frontier.insert(this.nodes[neighbor]);
        }
      }
    }
    
    return { distance, cameFrom };
  }

  async greedyBestFirst(start, destination, graphList) {
    const frontier = new MinHeap();
    this.nodes[start].key = 0;
    frontier.insert(this.nodes[start]);

    const cameFrom = {};
    cameFrom[start] = null;

    while (!frontier.empty()) {
      const minNode = frontier.extractMin();
      const currNodeVal = minNode.value;

      await this.markVisited(currNodeVal);

      if (currNodeVal === destination) return { cameFrom };

      for (let neighbor in graphList[currNodeVal]) {
        if (!(neighbor in cameFrom)) {
          const heuristic = Sweepa.octileDist(neighbor, destination);
          this.nodes[neighbor].key = heuristic;
          frontier.insert(this.nodes[neighbor]);
          cameFrom[neighbor] = currNodeVal;
        }
      }
    }

    return { cameFrom };
  }

  async aStar(start, destination, graphList) {
    const frontier = new MinHeap();
    const cameFrom = {};
    const gScore = {};
    gScore[start] = 0;
    this.nodes[start].key = 0;
    frontier.insert(this.nodes[start]);
    
    while (!frontier.empty()) {
      const minNode = frontier.extractMin();
      const currNodeVal = minNode.value;
      
      await this.markVisited(currNodeVal);
      
      if (currNodeVal === destination) return { gScore, cameFrom };
      
      for (let neighbor in graphList[currNodeVal]) {
        let distFromCurrToNeighbor = graphList[currNodeVal][neighbor];
        let distFromSourceToNeighbor = gScore[currNodeVal] + distFromCurrToNeighbor;
        
        if (!(neighbor in cameFrom) || gScore[neighbor] > distFromSourceToNeighbor) {
          gScore[neighbor] = distFromSourceToNeighbor;
          cameFrom[neighbor] = currNodeVal;

          const fScore = Sweepa.octileDist(neighbor, destination);
          this.nodes[neighbor].key = distFromSourceToNeighbor + fScore;
          frontier.insert(this.nodes[neighbor]);
        }
      }
    }
    
    return { gScore, cameFrom };
  }

  async breadthFirstSearch(start, destination, graphList) {
    const queue = [start];
    const visited = new Set();
    const cameFrom = {};
    visited.add(start);

    while (queue.length) {
      const currNodeVal = queue.shift();

      if (currNodeVal === destination) return { cameFrom };
      
      for (let neighbor in graphList[currNodeVal]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
          cameFrom[neighbor] = currNodeVal;
    
          await this.markVisited(neighbor);

          if (neighbor === destination) return { cameFrom };
        }
      }
    }

    return { cameFrom };
  }
}

export default Sweepa;