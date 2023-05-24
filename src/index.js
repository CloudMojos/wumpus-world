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

