class KnowledgeBase {
    constructor() {
        this.visitedCells = []
        this.safeCells = []
        this.unsafeCells = []
    }

    // Add the cell as visited and update the safeCells
    update(cell, adjacentCells, percept, world) {
        // Add the current cell as visited
        this.visitedCells.push(cell)
        // Update the safeCells
        // Add the adjacent cells in safeCells if it is safe
        adjacentCells.forEach(adjacentCell => {
            if (!percept.breeze && !percept.fart) {
                this.safeCells.push(adjacentCell)
            } 
            if (percept.fart) {
                // Check the adjacent cells of each of the adjacent cells
                let coord = world.getLocation(adjacentCell)
                let adjacentCellsofAdjacentCell = world.getAdjacentCells(coord)

                let adjacentVisited = []
                adjacentCellsofAdjacentCell.forEach(cell => {
                    // Check if there's a visited cell of each of the adjacent cells
                    if (this.isVisited(cell)) {
                        adjacentVisited.push(cell)
                    }
                })
                
                // Check if one of the visited adjacent cell contains a fart too

                // Set the danger level of this adjacent cell corresponding to the number of farts
                // If visited adjacent cell does not contain fart, then it is safe.
            } 
            if (percept.fart) {
                // Similar to fart
            }
        })
    }

    isVisited(cell) {
        return this.visitedCells.includes(cell)
    }
}

export { KnowledgeBase }