const Table = require('cli-table')

/* FUNCTIONS */
function decision (board) {
  let maxValue = -Infinity

  if ((board.successors || []).length <= 0) {
    return undefined
  }

  board.successors.forEach(({ state }) => {
    let v = minValue(state)
    if (v > maxValue) {
      maxValue = v
    }
  })

  return maxValue
}

function minValue (board) {
  if (board.isTerminal()) {
    return board.utility
  }

  return board.successors.reduce((v, { state }) => Math.min(v, maxValue(state)), Infinity)
}

function maxValue (board) {
  if (board.isTerminal()) {
    return board.utility
  }

  return board.successors.reduce((v, { state }) => Math.max(v, minValue(state)), -Infinity)
}

/* SETUP */
const board = [
  [12, 3, 8],
  [1, 5, 7],
  [14, 5, 1]
]

/* OUTPUT */
module.exports = {
  output: function output () {
    console.log(`The board looks like this:`)
    console.log(table(board))

    const playBoard = new Board(board)
    const maxValue = decision(playBoard)

    console.log('\nYour best value is: ')
    console.log(table(maxValue))
  }
}

/* UTILS */
class Board {
  constructor (board) {
    if (Array.isArray(board)) {
      this.successors = board.map((newBoard, i) => {
        /**
         * Index als actie, dan kunnen we op basis van de index de
         * array in gaan kijken tot op het laagste niveau
         */
        return {
          action: i,
          state: new Board(newBoard)
        }
      })
    }

    this.isLowestLevel = !Array.isArray(board)

    /**
     * Als het geen array meer is, dan zal board
     * een unieke waarde bevatten
     */
    this.utility = this.isLowestLevel ? board : undefined
  }

  isTerminal () {
    return this.isLowestLevel
  }
}

function table (input, options = {}) {
  input = makeSureItIsTwoDimensional(input)
  const table = new Table(options)
  table.push(...input)
  return table.toString()
}

function makeSureItIsTwoDimensional (input) {
  if (Array.isArray(input) && Array.isArray(input[0])) {
    return input
  } else if (Array.isArray(input) && !Array.isArray(input[0])) {
    return [input]
  } else if (!Array.isArray(input)) {
    return [[input]]
  }
}

function nameAction (input) {
  switch (input) {
    case -1: return 'left'
    case 0: return 'middle'
    case 1: return 'right'
    default: return 'unknown'
  }
}
