import GraphNode from './graph_node';

class Grid {
  constructor() {
    this.edit = true;
    this.drag = false;
    this.object = 'wall';
    this.graph = this.makeGrid();
    this.homeNode = null;

    this.connectNodes();
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  setObject(objStr) {
    this.object = objStr;
  }

  connectNodes() {
    const neighborDeltas = [
      [-1,  0],
      [-1,  1],
      [ 0,  1],
      [ 1,  1],
      [ 1,  0],
      [ 1, -1],
      [ 0, -1],
      [-1, -1]
    ];

    this.graph.forEach((row, i) => {
      row.forEach((node, j) => {
        node.neighbors = {};
        
        neighborDeltas.forEach(delta => {
          const posY = i + delta[0];
          const posX = j + delta[1];
          // debugger
          if (this.graph[posY] && this.graph[posY][posX]) {
            node.neighbors[[delta[0], delta[1]]] = this.graph[posY][posX];
          }
          // debugger
        });
        // debugger
      });
    });
  }

  attachNodeEvents(node) {
    node.addEventListener('mousedown', (e) => {
      const targetClasses = e.target.classList;
      const pos = e.target.id.split('-');
      const graphNode = this.graph[pos[0]][pos[1]];

      if (this.edit) {
        switch (this.object) {
          case 'sweepa':
            if (!targetClasses.value.includes('wall') && !targetClasses.value.includes('dust')) {
              const sweepaDiv = document.getElementsByClassName('sweepa')[0];
              if (sweepaDiv) {
                sweepaDiv.innerHTML = "";
                sweepaDiv.classList.toggle('sweepa');
              }
              targetClasses.toggle('sweepa');

              e.target.append(document.createElement('span'));

              this.homeNode = graphNode;
            }
            break;
          case 'dust':
            targetClasses.toggle(this.object);
            this.drag = true;
          case 'wall':
            for (let nodeNeighbor of Object.values(graphNode.neighbors)) {
              const neighborPos = nodeNeighbor.value.split('-');
              const delta = [(pos[0] - neighborPos[0]), (pos[1] - neighborPos[1])];

              if (e.target.className.includes('wall')) {
                nodeNeighbor.neighbors[delta] = graphNode;
              } else {
                delete nodeNeighbor.neighbors[delta];
              }
            }
            
            targetClasses.toggle(this.object);
            this.drag = true;
            break;
          default:
            break;
        }
      }
    });

    node.addEventListener('mouseover', (e) => {
      if (this.drag) {
        e.target.classList.toggle(this.object);
      }
    });

    node.addEventListener('mouseup', () => {
      this.drag = false;
    });
  }

  makeGrid() {
    const numRows = (window.innerHeight - 129) / 17;
    const numCols = (window.innerWidth - 40) / 17;
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