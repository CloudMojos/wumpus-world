class WumpusWorldAgent {
    constructor(world) {
      this.world = world; // The environment of the Wumpus World
      this.kb = new KnowledgeBase(); // The agent's knowledge base
      this.currentCell = {x: 0, y: 0}; // The current cell the agent is in
    }
    
    // Main function that runs the agent
    run() {
      while (!this.world.goalReached && !this.world.agentKilled) {
        let adjacentCells = this.world.getAdjacentCells(this.currentCell);
        let unvisitedCells = this.getUnvisitedCells(adjacentCells);
        let safeCells = this.getSafeCells(unvisitedCells);
        if (safeCells.length > 0) {
          let nextCell = this.chooseNextCell(safeCells);
          this.move(nextCell);
          this.updateKnowledgeBase();
        } else {
          let visitedCells = this.getVisitedCells(adjacentCells);
          let unsafeCells = this.getUnsafeCells(visitedCells);
          if (unsafeCells.length > 0) {
            let nextCell = this.chooseNextCell(unsafeCells);
            this.move(nextCell);
            this.updateKnowledgeBase();
          } else {
            this.shoot();
            this.updateKnowledgeBase();
          }
        }
      }
    }
    
    // Get the unvisited cells from a list of adjacent cells
    getUnvisitedCells(adjacentCells) {
      return adjacentCells.filter(cell => !this.kb.isVisited(cell));
    }
    
    // Get the safe cells from a list of unvisited cells
    getSafeCells(unvisitedCells) {
      return unvisitedCells.filter(cell => this.kb.isSafe(cell));
    }
    
    // Get the visited cells from a list of adjacent cells
    getVisitedCells(adjacentCells) {
      return adjacentCells.filter(cell => this.kb.isVisited(cell));
    }
    
    // Get the unsafe cells from a list of visited cells
    getUnsafeCells(visitedCells) {
      return visitedCells.filter(cell => !this.kb.isSafe(cell));
    }
    
    // Choose the next cell to move to
    chooseNextCell(cells) {
      return cells[0]; // In this example, we just choose the first cell in the list
    }
    
    // Move to a new cell
    move(cell) {
      this.currentCell = cell;
      this.world.moveAgent(cell);
    }
    
    // Shoot at the wumpus
    shoot() {
      let wumpusLocation = this.kb.getWumpusLocation();
      if (wumpusLocation) {
        this.world.shootArrow(wumpusLocation);
      }
    }
    
    // Update the agent's knowledge base with new information
    updateKnowledgeBase() {
      let cell = this.currentCell;
      let percept = this.world.getPercept(cell);
      this.kb.update(cell, percept);
    }
  }
  
  // The KnowledgeBase class maintains the agent's knowledge base
  class KnowledgeBase {
    constructor() {
      this.visitedCells = new Set(); // Set of visited cells
      this.safeCells = new Set(); // Set of safe cells
      this.wumpusPossible = true; // Whether the wumpus is still possible
      this.wumpusLocation = null; // The location of the wumpus, if known
    }
    
    // Update the knowledge base with new information from a cell's percept
    update(cell, percept) {
      this.visitedCells.add(cell);
      if (percept.stench) {
        if (this.wumpusPossible) {
            this.wumpusLocation = cell;
          }
        }
        if (percept.breeze) {
          this.safeCells.delete(cell);
        } else {
          this.safeCells.add(cell);
        }
        if (percept.scream) {
          this.wumpusPossible = false;
          this.wumpusLocation = null;
        }
    }
    // Check if a cell has been visited
    isVisited(cell) {
        return this.visitedCells.has(cell);
    }
    
    // Check if a cell is safe
    isSafe(cell) {
        return this.safeCells.has(cell);
    }
    
    // Get the location of the wumpus, if known
    getWumpusLocation() {
        return this.wumpusLocation;
    }
    }
    
// The WumpusWorld class represents the environment of the Wumpus World
class WumpusWorld {
    constructor(size) {
    this.size = size; // The size of the Wumpus World
    this.agentPosition = {x: 0, y: 0}; // The agent's initial position
    this.goalPosition = {x: size-1, y: size-1}; // The goal position
    this.pitProb = 0.2; // The probability of a pit in each cell
    this.wumpusProb = 0.1; // The probability of the wumpus being in each cell
    this.initialize(); // Initialize the environment
}

// Initialize the environment
initialize() {
this.grid = [];
for (let i = 0; i < this.size; i++) {
let row = [];
for (let j = 0; j < this.size; j++) {
let pit = (Math.random() < this.pitProb) ? true : false;
let wumpus = (Math.random() < this.wumpusProb) ? true : false;
row.push({pit: pit, wumpus: wumpus});
}
this.grid.push(row);
}
this.goalReached = false;
this.agentKilled = false;
}

// Get the percept from a cell
getPercept(cell) {
let percept = {
breeze: false,
stench: false,
scream: false
};
if (this.grid[cell.y][cell.x].pit) {
percept.breeze = true;
}
if (this.grid[cell.y][cell.x].wumpus) {
percept.stench = true;
}
return percept;
}

// Move the agent to a new cell
moveAgent(cell) {
this.agentPosition = cell;
let percept = this.getPercept(cell);
if (percept.breeze || percept.stench) {
this.agentKilled = true;
}
if (cell.x == this.goalPosition.x && cell.y == this.goalPosition.y) {
this.goalReached = true;
}
}

// Shoot an arrow at a cell
shootArrow(cell) {
if (this.grid[cell.y][cell.x].wumpus) {
this.grid[cell.y][cell.x].wumpus = false;
this.agentKilled = false;
this.goalReached = false;
} else {
this.agentKilled = true;
}
}

// Get the adjacent cells to a given cell
getAdjacentCells(cell) {
let adjacentCells = [];
if (cell.x > 0) {
adjacentCells.push({x: cell.x-1, y: cell.y});
}
if (cell.x < this.size-1) {
adjacentCells.push({x: cell.x+1, y: cell.y});
}
if (cell.y > 0) {
adjacentCells.push({x: cell.x, y: cell.y-1});
}
if (cell.y < this.size-1) {
adjacentCells.push({x: cell.x, y: cell.y+1});
}
return adjacentCells;
}
}

// The WumpusWorldSolver class represents an agent that can solve the Wumpus World problem
class WumpusWorldSolver {
constructor(world) {
this.world = world;
this.agent = new WumpusWorldAgent();
}

// Solve the Wumpus World problem
solve() {
while (!this.world.goalReached && !this.world.agentKilled) {
let percept = this.world.getPercept(this.world.agentPosition);
this.agent.update(percept);
let action = this.chooseAction();
switch (action) {
case 'move':
this.move();
break;
case 'shoot':
this.shoot();
break;
default:
break;
}
}
if (this.world.goalReached) {
console.log('Goal reached!');
} else {
console.log('Agent killed!');
}
}

// Choose an action for the agent
chooseAction() {
let wumpusLocation = this.agent.getWumpusLocation();
let adjacentCells = this.world.getAdjacentCells(this.world.agentPosition);
if (wumpusLocation) {
if (this.world.agentPosition.x == wumpusLocation.x && this.world.agentPosition.y == wumpusLocation.y) {
return 'shoot';
} else {
return 'move';
}
} else {
for (let i = 0; i < adjacentCells.length; i++) {
if (!this.agent.isVisited(adjacentCells[i]) && this.agent.isSafe(adjacentCells[i])) {
return 'move';
}
}
return 'shoot';
}
}

// Move the agent to an adjacent cell
move() {
let adjacentCells = this.world.getAdjacentCells(this.world.agentPosition);
for (let i = 0; i < adjacentCells.length; i++) {
if (!this.agent.isVisited(adjacentCells[i]) && this.agent.isSafe(adjacentCells[i])) {
this.world.moveAgent(adjacentCells[i]);
this.agent.addVisitedCell(adjacentCells[i]);
break;
}
}
}

// Shoot an arrow at a cell
shoot() {
let wumpusLocation = this.agent.getWumpusLocation();
if (wumpusLocation) {
let dx = Math.abs(this.world.agentPosition.x - wumpusLocation.x);
let dy = Math.abs(this.world.agentPosition.y - wumpusLocation.y);
if ((dx == 1 && dy == 0) || (dx == 0 && dy == 1)) {
this.world.shootArrow(wumpusLocation);
this.agent.addVisitedCell(wumpusLocation);
}
}
}
}

// Create a new Wumpus World
let world = new WumpusWorld(4);

// Create a new agent to solve the Wumpus World problem
let solver = new WumpusWorldSolver(world);

// Solve the Wumpus World problem
solver.solve();