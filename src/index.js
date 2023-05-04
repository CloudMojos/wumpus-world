import './style.css'
import { WumpusWorld } from './world'

// Wumpus World
const board = document.querySelector('#board')
const cells = board.querySelectorAll('.cell')

const world = new WumpusWorld(cells)

world.addWumpus(1, 0)
world.addPit(1, 2)
world.addPit(3, 2)
world.addPit(0, 3)
world.addAgent(1, 1)

// consoleInnerHTML(cells[2])