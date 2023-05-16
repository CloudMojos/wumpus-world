import { KnowledgeBase } from './knowledgebase'
// Location [x, y]
class Agent {
    constructor(world) {
        this.world = world
        this.kb = new KnowledgeBase()
        this.location = world.agentStartingLocation
        this.currentCell = this.world.getCell(this.location)
        this.adjacentCells = this.world.getAdjacentCells(this.location)
        this.percept = this.world.getPercept(this.currentCell)
        this.updateKB()
    }
    solve() {
        // // Returns divs, not the coords only
        // let safeCells = this.getSafeCells(this.adjacentCells)
        // while (!this.world.goalReached || this.world.agentKilled) {
        //     if (this.kb.safeCells.length > 0) {
        //         // move to the first safe cell
        //         let firstSafeCell = safeCells[0]
        //         this.moveToCoord(parseInt(firstSafeCell.dataset.column), parseInt(firstSafeCell.dataset.row))
        //         this.updateKB()
        //     }
        //     else {
        //         if (this.kb.wumpusNearby) {
        //             this.shoot(this.kb.wumpusLocation)
        //         } else {
        //             // move to the first least dangerous unsafe cell
        //         }
        //     }
        // }
    }

    // Returns div cells
    // I used propositional logic to determine if the cell is safe or not
    getSafeCells(adjacentCells) {
        return this.kb.safeCells
    }

    updateKB() {
        this.kb.update(this.currentCell, this.adjacentCells, this.percept)
    }

    move(direction) {
        let newLocation = []
        if (direction === 'u') {
            newLocation = [this.location[0] - 1, this.location[1]]
        }
        else if (direction === 'd') {
            newLocation = [this.location[0] + 1, this.location[1]]
        }
        else if (direction === 'l') {
            newLocation = [this.location[0], this.location[1] - 1]
        }
        else if (direction === 'r') {
            newLocation = [this.location[0], this.location[1] + 1]
        }
        this.moveAgentIcon(newLocation)
        this.location = newLocation
    }

    moveToCoord(x, y) {
        let newLocation = [x, y]
        this.moveAgentIcon(newLocation)
        this.location = newLocation
        this.currentCell = this.world.getCell(this.location)
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