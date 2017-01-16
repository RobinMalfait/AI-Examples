const { tableWithHeader } = require('../utils')

/* FUNCTIONS */
function gradientDescent (h, g, x = [], alpha) {
  var position = x
  var output = [[...x.map(format), format(h(...x))]]

  for (var i = 0; i < 9; i++) {
    const gradient = g(...position)
    position = position.map((value, index) => value - (alpha * gradient[index]))

    output.push([
      ...position.map(format),
      format(h(...position))
    ])
  }

  return output
}

function h (x1, x2) {
  return square(x1) + (2 * square(x2))
}

function g (x1, x2) {
  return [
    2 * x1,
    4 * x2
  ]
}

/* SETUP */
const startPosition = [1, 1]
const alpha = 0.1

/* OUTPUT */
module.exports = {
  gradientDescent: gradientDescent,
  output: function output () {
    console.log(tableWithHeader(gradientDescent(h, g, startPosition, alpha), ['x1', 'x2', 'h(...)']))
  }
}

/* UTILS */
function format (input) {
  return parseFloat(input.toFixed(4))
}

function square (input) {
  return Math.pow(input, 2)
}
