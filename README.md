# Sweepa

Sweepa is a robot vacuum that "cleans" your floor and uses search algorithms to return to its home. You can draw your room's layout, place Sweepa anywhere in the room and watch it clean with different settings.

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
  * Greedy Best First Algorithm (does not guarantee the shortest path, weighted, guided)
  * Breadth First Search (guarantees the shortest path, unweighted)
* Alter Sweepa's cleaning duration, movement speed, & pathfinding speed

# Code Snippets
```javascript
  async heapDijkstras(start, destination, graphList) {
    const frontier = new MinHeap();
    const cameFrom = {};
    const distance = {};
    for (let node in this.nodes) {
      if (node == start) {
        distance[start] = 0;
        this.nodes[start].key = 0;
        frontier.insert(this.nodes[start]);
      } else {
        distance[node] = Infinity;
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
      
      if (currNodeVal == destination) return { distance, cameFrom };
      
      for (let neighbor in graphList[currNodeVal]) {
        let distFromCurrToNeighbor = graphList[currNodeVal][neighbor];
        let distFromSourceToNeighbor = distance[currNodeVal] + distFromCurrToNeighbor;
        
        if (distance[neighbor] > distFromSourceToNeighbor) {
          distance[neighbor] = distFromSourceToNeighbor;
          cameFrom[neighbor] = currNodeVal;

          this.nodes[neighbor].key = distFromSourceToNeighbor;
          frontier.insert(this.nodes[neighbor]);
        }
      }
    }
    
    return { distance, cameFrom };
  }
```

