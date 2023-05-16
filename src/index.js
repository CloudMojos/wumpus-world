import './style.css'
import { Agent } from './agent'
import { WumpusWorld } from './world'

// Wumpus World
const board = document.querySelector('#board')
const cells = board.querySelectorAll('.cell')

const world = new WumpusWorld(cells)

world.addWumpus(0, 1)
world.addPit(2, 1)
world.addPit(2, 3)
world.addPit(3, 0)
world.addAgent()

const agent = new Agent(world)

// agent.move('u')
// agent.move('r')
// agent.move('r')
// agent.move('r')
// agent.move('u')

agent.moveToCoord(0, 2)
agent.updateKB()

let adjacentCells = agent.world.getAdjacentCells(agent.location)
let safeCells = agent.getSafeCells(adjacentCells)


agent.moveToCoord(1, 2)
agent.updateKB()

adjacentCells = agent.world.getAdjacentCells(agent.location)
safeCells = agent.getSafeCells(adjacentCells)
console.log(`Safe cells:`)
console.log(safeCells)
console.log(`Visited cells:`)
console.log(agent.kb.visitedCells)


// console.log()
// agent.moveToCoord(parseInt(firstSafeCell.dataset.column), parseInt(firstSafeCell.dataset.row))
// console.log(`Current cell:`)
// console.log(agent.currentCell)


// console.log(`Visited cells:`)
// console.log(agent.kb.visitedCells)


// adjacentCells = agent.world.getAdjacentCells(agent.location)
// // console.log(
// // agent.world.containsFart(agent.currentCell))
// // console.log(`Adjacent cells:`)
// // console.log(adjacentCells)
// safeCells = agent.getSafeCells(adjacentCells)
// console.log(`Safe cells:`)
// console.log(safeCells)
// // console.log(`Visited cells:`)
// // console.log(agent.kb.visitedCells)
// firstSafeCell = safeCells[0]
// // agent.moveToCoord(parseInt(firstSafeCell.dataset.column), parseInt(firstSafeCell.dataset.row))


