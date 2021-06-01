import GraphNode from './graph_node';

class Grid {
  constructor() {
    this.edit = true;
    this.drag = false;
    this.graph = this.makeGrid();
    this.object = 'wall';
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  makeGrid() {
    const numRows = (window.innerHeight - 129) / 17;
    const numCols = (window.innerWidth - 40) / 17;
    const grid = document.getElementById('grid');
    const graph = [];

    grid.addEventListener('mouseleave', () => this.drag = false);

    for (let i = 0; i < numRows; i++) {
      const row = document.createElement('div');
      row.className = `row`;
      row.id = `${i}`;

      for (let j = 0; j < numCols; j++) {
        const node = document.createElement('div');
        node.className = `node unvisited`;
        node.id = `${i}-${j}`;
        graph.push(new GraphNode(node.id));

        node.addEventListener('mousedown', (e) => {
          if (this.edit) {
            e.target.classList.toggle('wall');
            this.drag = true;
          }
        });

        node.addEventListener('mouseover', (e) => {
          if (this.drag) e.target.classList.toggle('wall');
        });

        node.addEventListener('mouseup', () => {
          this.drag = false;
        });

        row.append(node);
      }

      grid.append(row);
    }

    return graph;
  }
}

export default Grid;