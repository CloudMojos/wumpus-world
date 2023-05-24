import { KnowledgeBase } from './knowledgebase'
// Location [x, y]
class Agent {
    constructor(world) {
        this.world = world
        this.kb = new KnowledgeBase(this.world.cells)
        this.location = this.world.agentStartingLocation
        this.currentCell = this.world.getCell(this.location)
        this.updateAgent()
        this.updateKB()
    }

    updateAgent() {
        this.adjacentCells = this.world.getAdjacentCells(this.location)
        this.breeze = this.world.containsBreeze(this.currentCell)
        this.fart = this.world.containsFart(this.currentCell)
    }
    solve() {
        while (!this.world.goalReached || this.world.agentKilled) {
            // Take the adjacent cells
            // From adjacent cells, determine if it is visited or not
            // From univisited adjacent cells, return the safe cells

            // To determine the safe cells:
            // 1. If the current cell does not contain stench, it is safe
            // 2. If the current cell does not contain breeze, it is safe
            // 3. 


            // if (this.kb.safeCells.length > 0) {
            //     // move to the first safe cell
            //     let firstSafeCell = safeCells[0]
            //     this.moveToCoord(parseInt(firstSafeCell.dataset.column), parseInt(firstSafeCell.dataset.row))
            //     this.updateKB()
            // }
            // else {
            //     if (this.kb.wumpusNearby) {
            //         this.shoot(this.kb.wumpusLocation)
            //     } else {
            //         // move to the first least dangerous unsafe cell
            //     }
            // }
        }
    }

    // Returns div cells
    // I used propositional logic to determine if the cell is safe or not
    getSafeCells() {
        // return this.kb.safeCells
    }

    // this.kb.update(cell, adjecentCells, stench = false, breeze = false)
    updateKB() {
        this.kb.update(this.currentCell, this.adjacentCells, this.breeze, this.fart)
    }

    move(direction) {
        let newLocation = []
        if (direction === 'u') {
            newLocation = [this.location[0], this.location[1] - 1]
        }
        else if (direction === 'd') {
            newLocation = [this.location[0], this.location[1] + 1]
        }
        else if (direction === 'u') {
            newLocation = [this.location[0] - 1, this.location[1]]
        }
        else if (direction === 'r') {
            newLocation = [this.location[0] + 1, this.location[1]]
        }
        this.moveAgentIcon(newLocation)
        this.location = newLocation
        // console.log(this.location)
        this.currentCell = this.world.getCell(this.location)
        this.updateAgent()
    }

    moveToCoord(x, y) {
        let newLocation = [x, y]
        this.moveAgentIcon(newLocation)
        this.location = newLocation
        this.currentCell = this.world.getCell(this.location)
        this.updateAgent()
    }

    moveAgentIcon(newLocation) {
        this.world.cells.forEach(cell => {
            if (parseInt(cell.dataset.row) === newLocation[0] && parseInt(cell.dataset.column) == newLocation[1]) {
                this.world.removeAgent(this.location[0], this.location[1])
                this.world.addAgent(newLocation[0], newLocation[1])
            }
        })
    }

}

export { Agent }