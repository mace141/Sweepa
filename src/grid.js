let drag = false;

class Grid {
  constructor() {
    this.edit = true;
    Grid.makeGrid();
  }

  static toggleEdit() {
    this.edit = !this.edit;
  }

  static makeGrid() {
    const numRows = (window.innerHeight - 129) / 17;
    const numCols = (window.innerWidth - 40) / 17;
    const grid = document.getElementById('grid');
    grid.addEventListener('mouseleave', () => drag = false);

    for (let i = 0; i < numRows; i++) {
      const row = document.createElement('div');
      row.className = `row`;
      row.id = `${i}`;

      for (let j = 0; j < numCols; j++) {
        const node = document.createElement('div');
        node.className = `node unvisited`;
        node.id = `${i}-${j}`;

        node.addEventListener('mousedown', (e) => {
          e.target.classList.toggle('wall');
          drag = true;
        });
        node.addEventListener('mouseover', (e) => {
          if (drag) e.target.classList.toggle('wall');
        });
        node.addEventListener('mouseup', () => {
          drag = false;
        });

        row.append(node);
      }

      grid.append(row);
    }
  }
}

export default Grid;