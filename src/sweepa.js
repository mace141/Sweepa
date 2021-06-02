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
  constructor(home, graph) {
    this.home = home;
    this.graph = graph;
    this.currNode = home;
  }


}

export default Sweepa;