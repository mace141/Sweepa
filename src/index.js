import './stylesheets/main.scss';
import Grid from './grid';
import Sweepa from './sweepa';

document.addEventListener('DOMContentLoaded', () => {
  const clearGridBtn = document.getElementById('clear-grid');
  const clearWallsBtn = document.getElementById('clear-walls');
  // const clearDustBtn = document.getElementById('clear-dust');
  const sweepaBtn = document.getElementById('sweepa-btn');
  const wallBtn = document.getElementById('wall-btn');
  const startBtn = document.getElementById('start-btn');

  let grid = new Grid();
  let sweepa;

  clearGridBtn.addEventListener('click', () => {
    if (grid.edit) {
      document.getElementById('grid').innerHTML = "";
      grid = new Grid();

      if (!wallBtn.className.includes('selected')) {
        wallBtn.classList.add('selected');
      }
      sweepaBtn.classList.remove('selected');
    }
  });

  clearWallsBtn.addEventListener('click', () => {
    if (grid.edit) {
      const walls = document.getElementsByClassName('wall');

      grid.connectNodes();

      while (walls.length > 0) {
        walls[0].classList.remove('wall');
      }
    }
  });

  sweepaBtn.addEventListener('click', () => {
    grid.setObject('sweepa');
    sweepaBtn.classList.toggle('selected');
    wallBtn.classList.toggle('selected');
  });

  wallBtn.addEventListener('click', () => {
    grid.setObject('wall');
    sweepaBtn.classList.toggle('selected');
    wallBtn.classList.toggle('selected');
  });
  
  startBtn.addEventListener('click', () => {
    if (grid.edit && grid.homeNode) {
      grid.toggleEdit();

      const visited = document.getElementsByClassName('visited');
      const swept = document.getElementsByClassName('swept');
      while (visited.length > 0 || swept.length > 0) {
        if (visited[0]) {
          visited[0].classList.add('unvisited');
          visited[0].classList.remove('return');
          visited[0].classList.remove('visited');
        }

        if (swept[0]) {
          swept[0].classList.remove('swept');
        }
      }

      sweepa = new Sweepa(grid);
      sweepa.beginCleaning();
    }
  });

  window.sweepa = sweepa;
  window.grid = grid;
});