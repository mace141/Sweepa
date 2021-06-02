import './stylesheets/main.scss';
import Grid from './grid';

document.addEventListener('DOMContentLoaded', () => {
  const clearGridBtn = document.getElementById('clear-grid');
  const clearWallsBtn = document.getElementById('clear-walls');
  // const clearDustBtn = document.getElementById('clear-dust');
  const sweepaBtn = document.getElementById('sweepa-btn');
  const wallBtn = document.getElementById('wall-btn');
  let grid = new Grid();

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
});