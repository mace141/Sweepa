import Grid from './grid';
import Sweepa from './sweepa';

class View {
  static attachEvents() {
    const clearGridBtn = document.getElementById('clear-grid');
    const clearWallsBtn = document.getElementById('clear-walls');
    const sweepaBtn = document.getElementById('sweepa-btn');
    const wallBtn = document.getElementById('wall-btn');
    const startBtn = document.getElementById('start-btn');
    const modesDropdown = document.getElementsByClassName('modes-ctnr')[0];

    const docking = document.getElementById('docking');
    const dijkstrasBtn = document.getElementById('dijkstras');
    const aStarBtn = document.getElementById('a star');
    const greedyBtn = document.getElementById('greedy');

    const cleaning = document.getElementById('cleaning');
    const randomBtn = document.getElementById('random');
    const clockwiseBtn = document.getElementById('clockwise');

    let grid = new Grid();
    let sweepa = new Sweepa(grid);

    clearGridBtn.addEventListener('click', () => {
      if (grid.edit) {
        cleaning.innerHTML = "Random";
        docking.innerHTML = "Dijkstra's Algorithm";

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

      if (!sweepaBtn.className.includes('selected')) {
        sweepaBtn.classList.toggle('selected');
        wallBtn.classList.toggle('selected');
      }
    });

    wallBtn.addEventListener('click', () => {
      grid.setObject('wall');

      if (!wallBtn.className.includes('selected')) {
        sweepaBtn.classList.toggle('selected');
        wallBtn.classList.toggle('selected');
      }
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

        modesDropdown.classList.add('disabled');
        startBtn.classList.add('pause');
        startBtn.innerHTML = 'Pause';

        sweepa.setGrid(grid);
        sweepa.beginCleaning();
      } else if (sweepa.cleaning) {
        
      }
    });

    dijkstrasBtn.addEventListener('click', () => {
      grid.dockingIdx = 0;
      docking.innerHTML = "Dijkstra's Algorithm";
    });

    aStarBtn.addEventListener('click', () => {
      grid.dockingIdx = 1;
      docking.innerHTML = "A* Search";
    });

    greedyBtn.addEventListener('click', () => {
      grid.dockingIdx = 2;
      docking.innerHTML = "Greedy Best First Search";
    });

    randomBtn.addEventListener('click', () => {
      grid.cleaningIdx = 0;
      cleaning.innerHTML = "Random";
    });

    clockwiseBtn.addEventListener('click', () => {
      grid.cleaningIdx = 1;
      cleaning.innerHTML = "Clockwise Prone";
    });
  }
}

export default View;