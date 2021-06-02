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
  });

  wallBtn.addEventListener('click', () => {
    grid.setObject('wall');
  });
  
  startBtn.addEventListener('click', () => {
    if (grid.edit && grid.homeNode) {
      grid.toggleEdit();
      sweepa = new Sweepa(grid.homeNode, grid.graph);

      const sweepaSeq = setInterval(() => {
        sweepa.step();
      }, 200);

      setTimeout(() => {
        clearInterval(sweepaSeq);
        grid.toggleEdit();
      }, 5000);
    }
  });
});