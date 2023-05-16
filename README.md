# Wumpus World
How tf am I supposed to code this? LOL.

# The Parts
- The UI is written in HTML, CSS, and JavaScript. It features the **World**, a board that shows different components such as: **Pit**, **Breeze**, **Wumpus**, **Stench**, **Gold** and the **Agent**.
- The functionality is written in JavaScript. More details about how it works will be explained below.

# How I Approached the Problem
- I dunno don't ask me
- I can't find good tutorial to solve the problem alsdkfja;lhwiaru
- There will be three main classes: Agent, KnowledgeBase, and WumpusWorld.
- The Agent class is responsible for the agent's actions in the world. It will also be used to access its KnowledgeBase. The agent class will contain its own propositional logic to determine where to move during when.
- The KnowledgeBase class is responsible for holding information regarding to what the agent currently knows about the world. It includes visited cells,
unvisited cells, and others.
- The WumpusWorld class contains the tiles that the agent moves in. It also includes the rules of the game and the components such as Pit, Breeze, and Wumpus.

# How the agent moves
    1. After initializing the position of the components of the wumpus world, the agent will update its knowledgebase to see if its adjacent cells is safe or not. In this problem, the initial location of the agent is always safe. Meaning there's no percept in it and only the agent resides in that cell. 
## Wumpus World Class
    This class will contain information about the wumpus world. It is responsible for the interaction between the agent and the world. This includes things like if the wumpus world has been solved.

## Knowledge Base Class
    This class will contain the "knowledge" of the agent. It is responsible for things like if the cell has been visited or not or the chance of a cell to have a pit or wumpus in it.
         
## Agent Class
    This class will contain the agent that will solve the Wumpus World. It is responsible for the movement and decisions.

> Side notes
This is super difficult to implement. FUck. As the codebase goes longer, it becomes much harder to test. This is the main reason why i'm taking the shower so that you wouldn't know if i'm crying or not.
