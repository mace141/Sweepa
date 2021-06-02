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
  constructor(homeNode, graph) {
    this.homeNode = homeNode;
    this.graph = graph;
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
}

export default Sweepa;