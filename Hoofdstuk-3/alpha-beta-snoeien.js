const { table } = require('../utils')

/* FUNCTIONS */
function decision (board) {
  let alpha = -Infinity

  if ((board.successors || []).length <= 0) {
    return undefined
  }

  board.successors.forEach(({ state }) => {
    let v = minValue(state, alpha, Infinity)
    if (v > alpha) {
      alpha = v
    }
  })

  return alpha
}

function minValue (board, alpha, beta) {
  if (board.isTerminal()) {
    return board.utility
  }

  let v = Infinity
  for (let { state } of board.successors) {
    v = Math.min(v, maxValue(state, alpha, beta))

    if (v <= alpha) {
      return v
    }

    beta = Math.min(v, beta)
  }

  return v
}

function maxValue (board, alpha, beta) {
  if (board.isTerminal()) {
    return board.utility
  }

  let v = -Infinity
  for (let { state } of board.successors) {
    v = Math.max(v, minValue(state, alpha, beta))

    if (v >= beta) {
      return v
    }

    alpha = Math.max(v, alpha)
  }

  return v
}

/* SETUP */
const board = [
  [
    [2, 3],
    [5, 7]
  ],
  [
    [-2, 0],
    [1, 10]
  ],
  [
    [2, 1],
    [5, 7]
  ]
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
