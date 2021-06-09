import GraphNode from './graph_node';

const diagDeltas = [
  [-1,  1],
  [ 1,  1],
  [ 1, -1],
  [-1, -1]
];

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

class Grid {
  constructor() {
    this.edit = true;
    this.drag = false;
    this.object = 'wall';
    this.graphArr = this.makeGrid();
    this.graphList = {};
    this.homeNode = null;

    this.connectNodes();
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  setObject(objStr) {
    this.object = objStr;
  }

  connectNodes() {
    this.graphArr.forEach((row, i) => {
      row.forEach((node, j) => {
        node.neighbors = {};
        this.graphList[node.value] = {};

        dirDeltas.forEach(delta => {
          const posY = i + delta[0];
          const posX = j + delta[1];
          
          if (this.graphArr[posY] && this.graphArr[posY][posX]) {
            let neighbor = this.graphArr[posY][posX];

            node.neighbors[[delta[0], delta[1]]] = neighbor;
            
            if (JSON.stringify(diagDeltas).includes(delta)) {
              this.graphList[node.value][neighbor.value] = 1.41;
            } else {
              this.graphList[node.value][neighbor.value] = 1;
            }
          }
        });
      });
    });
  }

  toggleWall(targetClasses, pos, graphNode, e) {
    if (!targetClasses.value.includes('sweepa')) {
      targetClasses.toggle(this.object);

      for (let nodeNeighbor of Object.values(graphNode.neighbors)) {
        const neighborPos = nodeNeighbor.value.split('-');
        const delta = [(pos[0] - neighborPos[0]), (pos[1] - neighborPos[1])];

        if (e.currentTarget.className.includes('wall')) {
          delete this.graphList[nodeNeighbor.value][graphNode.value];
          delete nodeNeighbor.neighbors[delta];
        } else {
          if (JSON.stringify(diagDeltas).includes(delta)) {
            this.graphList[nodeNeighbor.value][graphNode.value] = 1.41;
          } else {
            this.graphList[nodeNeighbor.value][graphNode.value] = 1;
          }
          
          nodeNeighbor.neighbors[delta] = graphNode;
        }
      }

    }
  }

  attachNodeEvents(node) {
    node.addEventListener('mousedown', (e) => {
      const targetClasses = e.currentTarget.classList;
      const pos = e.currentTarget.id.split('-');
      const graphNode = this.graphArr[pos[0]][pos[1]];

      if (this.edit) {
        switch (this.object) {
          case 'sweepa':
            if (!targetClasses.value.includes('wall') && !targetClasses.value.includes('dust')) {
              this.homeNode = graphNode;

              const prevSweepa = document.getElementsByClassName('sweepa')[0];
              if (prevSweepa) {
                prevSweepa.innerHTML = "";
                prevSweepa.classList.remove('sweepa', 'home');
              }

              targetClasses.add('sweepa', 'home');
            }

            break;
          case 'dust':
            if (!targetClasses.value.includes('sweepa')) {
              targetClasses.toggle(this.object);
            }
            this.drag = true;

            break;
          case 'wall':
            this.toggleWall(targetClasses, pos, graphNode, e);

            this.drag = true;
            
            break;
          default:
            break;
        }
      }
    });

    node.addEventListener('mouseover', (e) => {
      const targetClasses = e.currentTarget.classList;
      const pos = e.currentTarget.id.split('-');
      const graphNode = this.graphArr[pos[0]][pos[1]];

      if (this.drag) {
        if (this.object == 'wall') {
          this.toggleWall(targetClasses, pos, graphNode, e);
        }
      }
    });

    node.addEventListener('mouseup', () => {
      this.drag = false;
    });
  }

  makeGrid() {
    const numRows = 10 || (window.innerHeight - 155) / 27;
    const numCols = 10 || (window.innerWidth - 40) / 27;
    const grid = document.getElementById('grid');
    const graph = [];

    grid.addEventListener('mouseleave', () => this.drag = false);

    for (let i = 0; i < numRows; i++) {
      const graphRow = [];
      const gridRow = document.createElement('div');
      gridRow.className = `row`;
      gridRow.id = `${i}`;

      for (let j = 0; j < numCols; j++) {
        const newNode = document.createElement('div');
        
        newNode.className = `node unvisited`;
        newNode.id = `${i}-${j}`;
        newNode.append(document.createElement('div'));

        this.attachNodeEvents(newNode);
        gridRow.append(newNode);
        
        graphRow.push(new GraphNode(newNode.id));
      }

      grid.append(gridRow);
      graph.push(graphRow);
    }
    
    return graph;
  }
}

export default Grid;