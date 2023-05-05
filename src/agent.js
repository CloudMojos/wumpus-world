import { KnowledgeBase } from './knowledgebase'
// Location [y, x]
class Agent {
    constructor(world) {
        this.world = world
        this.kb = new KnowledgeBase()
        this.location = world.agentStartingLocation
    }

    move(direction) {
        if (direction === 'u') {
            const newLocation = [this.location[0] - 1, this.location[1]]
            this.moveAgentIcon(newLocation)
        }

        else if (direction === 'd') {
            const newLocation = [this.location[0] + 1, this.location[1]]
            this.moveAgentIcon(newLocation)
        }

        else if (direction === 'l') {
            const newLocation = [this.location[0], this.location[1] - 1]
            this.moveAgentIcon(newLocation)
        }

        else if (direction === 'r') {
            const newLocation = [this.location[0], this.location[1] + 1]
            this.moveAgentIcon(newLocation)
        }
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