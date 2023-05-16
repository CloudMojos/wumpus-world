class WumpusWorld {
    constructor(cells) {
        this.cells = cells
        this.agentStartingLocation = []
    }

    // Add wumpus and stench around it
    addWumpus(posX, posY) {
        this.cells.forEach(cell => {
            //console.log(parseInt(cell.dataset.row), cell.dataset.column)
            // Add the wumpus
            if (parseInt(cell.dataset.row) === posY && parseInt(cell.dataset.column) === posX) {
                cell.innerText += '👹'
            }
            // Add the stench
            if (parseInt(cell.dataset.row) === posY) {
                if (parseInt(cell.dataset.column) === (posX - 1)) {
                    if (!this.containsFart(cell)) {
                        cell.innerText += '💩'
                    }
                }
                else if (parseInt(cell.dataset.column) === (posX + 1)) {
                    if (!this.containsFart(cell)) {
                        cell.innerText += '💩'
                    }
                }
            }

            else if (parseInt(cell.dataset.column) === posX) {
                if (parseInt(cell.dataset.row) === (posY - 1)) {
                    if (!this.containsFart(cell)) {
                        cell.innerText += '💩'
                    }
                }
                else if (parseInt(cell.dataset.row) === (posY + 1)) {
                    if (!this.containsFart(cell)) {
                        cell.innerText += '💩'
                    }
                }
            }
        })
    }
  
    // Add pit and breeze around it
    addPit(posX, posY) {
        this.cells.forEach(cell => {
            //console.log(parseInt(cell.dataset.row), cell.dataset.column)
            // Add the wumpus
            if (parseInt(cell.dataset.row) === posY && parseInt(cell.dataset.column) === posX) {
                cell.innerText += '🕳️'
            }
            // Add the stench
            if (parseInt(cell.dataset.row) === posY) {
                if (parseInt(cell.dataset.column) === (posX - 1)) {
                    if (!this.containsBreeze(cell)) {
                        cell.innerText += '🍃'
                    }
                }
                else if (parseInt(cell.dataset.column) === (posX + 1)) {
                    if (!this.containsBreeze(cell)) {
                        cell.innerText += '🍃'
                    }
                }
            }

            else if (parseInt(cell.dataset.column) === posX) {
                if (parseInt(cell.dataset.row) === (posY - 1)) {
                    if (!this.containsBreeze(cell)) {
                        cell.innerText += '🍃'
                    }
                }
                else if (parseInt(cell.dataset.row) === (posY + 1)) {
                    if (!this.containsBreeze(cell)) {
                        cell.innerText += '🍃'
                    }
                }
            }
        })

    }

    addAgent(posX = 0, posY = 3) {
        this.cells.forEach(cell => {
            if (parseInt(cell.dataset.row) === posY && parseInt(cell.dataset.column) === posX) {
                cell.innerText += '🧝'
            }
        })
        this.agentStartingLocation = [posX, posY]
    }

    removeAgent(posX, posY) {
        this.cells.forEach(cell => {
            if (parseInt(cell.dataset.row) === posY && parseInt(cell.dataset.column) === posX) {
                cell.innerText = cell.innerText.replace(/🧝/g, '')
            }
        })
    }

    containsFart(cell) {
        return cell.innerText.includes('💩')
    }

    containsBreeze(cell) {
        return cell.innerText.includes('🍃')
    }
    // Coord to Cell
    getCell(coord) {
        // console.log(coord)
        let currentCell
        this.cells.forEach(cell => {
            if (parseInt(cell.dataset.column) === coord[0] && parseInt(cell.dataset.row) === coord[1]) {
                currentCell = cell
            }
        })
        return currentCell
    }
    // // Cell to Coord
    getLocation(cell) {
        let coord = []
        coord.push(parseInt(cell.dataset.column))
        coord.push(parseInt(cell.dataset.row))
        return coord
    }

    getAdjacentCells(coord) {
        let adjacentCells = []
        this.cells.forEach(cell => {
            if (parseInt(cell.dataset.column) === coord[0] && parseInt(cell.dataset.row) === coord[1] - 1) {
                adjacentCells.push(cell)
            }
            else if (parseInt(cell.dataset.column) === coord[0] && parseInt(cell.dataset.row) === coord[1] + 1) {
                adjacentCells.push(cell)
            }
            else if (parseInt(cell.dataset.column) === coord[0] - 1 && parseInt(cell.dataset.row) === coord[1]) {
                adjacentCells.push(cell)
            }
            else if (parseInt(cell.dataset.column) === coord[0] + 1 && parseInt(cell.dataset.row) === coord[1]) {
                adjacentCells.push(cell)
            }
        })
        // console.log(adjacentCells)
        return adjacentCells
    }
}

export { WumpusWorld }
