class Grid {
  constructor() {
    this.grid = Grid.makeGrid();
  }

  static makeGrid() {
    const numRows = (window.innerHeight - 129) / 22;
    const numCols = (window.innerWidth - 40) / 22;
    const grid = document.getElementById('grid');

    for (let i = 0; i < numRows; i++) {
      const row = document.createElement('div');
      row.className = `row ${i}`;
      for (let j = 0; j < numCols; j++) {
        const node = document.createElement('div');
        node.className = `node ${i}-${j} unvisited`;
        row.append(node);
      }
      grid.append(row);
    }
  }
}

export default Grid;