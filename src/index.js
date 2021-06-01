import './stylesheets/main.scss';
import Grid from './grid';

document.addEventListener('DOMContentLoaded', () => {
  const clearGridBtn = document.getElementById('clear-grid');
  const clearWallsBtn = document.getElementById('clear-walls');
  // const clearDustBtn = document.getElementById('clear-dust');
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
});