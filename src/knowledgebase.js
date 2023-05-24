class Cell {
    constructor(cell) {
        this.divCell = cell
        this.safeCells = []
    }
}

class KnowledgeBase {
    constructor(cells) {
        // Need to make it an array cuz NodeList soyboy af
        this.cellsArray = Array.from(cells) // This will contain score property
        this.unvisited = this.cellsArray
        this.visited = []
        this.safe = []
        this.possiblePit = []
        this.possibleWumpus = []
    }

    update(cell, adjacentCells, breeze, fart) {
        // Visit the cell
        this.unvisited = this.removeUnvisited(cell)
        // console.log(this.unvisited)
        // console.log(cell)
        // Create a cell class from cell, add it to visited array
        let newCell = new Cell(cell)
        this.visited.push(newCell)
        let newCellSafeCells = this.getSafeCells(adjacentCells, breeze, fart)
        // From each of the adjacent cells, determine the safe cells
    }

    removeUnvisited(cell) {
        return this.unvisited.filter(currentCell => {
            if (parseInt(currentCell.dataset.column) === parseInt(cell.dataset.column) && parseInt(currentCell.dataset.row) === parseInt(cell.dataset.row)) {
                return false
            }
            return true
        })
    }

    // // Add the cell as visited and update the safeCells
    // update(cell, adjacentCells, percept, world) {
    //     // Add the current cell as visited
    //     this.visitedCells.push(cell)
    //     // Update the safeCells
    //     // Add the adjacent cells in safeCells if it is safe
    //     adjacentCells.forEach(adjacentCell => {
    //         if (!percept.breeze && !percept.fart) {
    //             this.safeCells.push(adjacentCell)
    //         } 
    //         if (percept.fart) {
    //             // Check the adjacent cells of each of the adjacent cells
    //             let coord = world.getLocation(adjacentCell)
    //             let adjacentCellsofAdjacentCell = world.getAdjacentCells(coord)

    //             let adjacentVisited = []
    //             adjacentCellsofAdjacentCell.forEach(cell => {
    //                 // Check if there's a visited cell of each of the adjacent cells
    //                 if (this.isVisited(cell)) {
    //                     adjacentVisited.push(cell)
    //                 }
    //             })
                
    //             // Check if one of the visited adjacent cell contains a fart too

    //             // Set the danger level of this adjacent cell corresponding to the number of farts
    //             // If visited adjacent cell does not contain fart, then it is safe.
    //         } 
    //         if (percept.fart) {
    //             // Similar to fart
    //         }
    //     })
    // }

    isVisited(cell) {
        // return this.unvisitedCells.includes(cell)

    }
}

export { KnowledgeBase }