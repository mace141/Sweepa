# Sweepa

Sweepa is a robot vacuum that "cleans" your floor and uses search algorithms to return to its home. You can draw your room's layout, place Sweepa anywhere in the room and watch it clean with different settings.

Here's the [live site!](https://mace141.github.io/Sweepa)

# Technologies

* Vanilla JavaScript
* HTML
* SCSS

# Functionality

Users are able to:
* Draw walls on a grid and place Sweepa down
* Select from various cleaning modes: 
  * Dijkstra's Algorithm (guarantees the shortest path, weighted)
  * A* Search Algorithm (guarantees the shortest path, weighted, guided)
  * Greedy Best First Search (does not guarantee the shortest path, weighted, guided)
  * Breadth First Search (guarantees the shortest path, unweighted)
* Alter Sweepa's cleaning duration, movement speed, & pathfinding speed

# Pathfinding In Action

## Dijkstra's Algorithm

<img src="/dist/assets/gifs/dijkstras.gif" alt="Dijkstra's Algorithm" width="500" height="auto"/>

## A* Search Algorithm

<img src="/dist/assets/gifs/astar.gif" alt="A* Search Algorithm" width="500" height="auto"/>

## Greedy Best First Search

<img src="/dist/assets/gifs/greedybestfirst.gif" alt="Greedy Best First Search" width="500" height="auto"/>

## Breadth First Search

<img src="/dist/assets/gifs/breadthfirst.gif" alt="Breadth First Search" width="500" height="auto"/>

# Code Snippets
```javascript
  async aStar(start, destination, graphList) {
    const frontier = new MinHeap();
    const cameFrom = {};
    const gScore = {};
    for (let node in this.nodes) {
      if (node == start) {
        gScore[start] = 0;
        this.nodes[start].key = 0;
        frontier.insert(this.nodes[start]);
      } else {
        gScore[node] = Infinity;
        this.nodes[node].key = Infinity;
      }
    }
    
    while (!frontier.empty()) {
      const minNode = frontier.extractMin();
      const currNodeVal = minNode.value;
      
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(this.markVisited(currNodeVal));
        }, this.searchSpeed);
      });
      
      if (currNodeVal == destination) return { gScore, cameFrom };
      
      for (let neighbor in graphList[currNodeVal]) {
        let distFromCurrToNeighbor = graphList[currNodeVal][neighbor];
        let distFromSourceToNeighbor = gScore[currNodeVal] + distFromCurrToNeighbor;
        
        if (gScore[neighbor] > distFromSourceToNeighbor) {
          gScore[neighbor] = distFromSourceToNeighbor;
          cameFrom[neighbor] = currNodeVal;

          const fScore = this.octileDist(neighbor, destination);
          this.nodes[neighbor].key = distFromSourceToNeighbor + fScore;
          frontier.insert(this.nodes[neighbor]);
        }
      }
    }
    
    return { gScore, cameFrom };
  }
```

