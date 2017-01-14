const { sigmoid } = require('./sigmoidFunction')

/* FUNCTIONS */
function g (input, thetas) {
  return input.map((value, i) => thetas[i] * value)
    .reduce((total, curr) => total + curr, 0)
}

function addBias (input) {
  return [1, ...input]
}

/* SETUP */
const input = [0.8, 2]
const thetas = [3.83, -4.29, 0.27]

/* OUTPUT */
module.exports = {
  output: function output () {
    const biasedInput = addBias(input)
    const gValue = g(biasedInput, thetas)
    console.log(`h(${input.join(', ')})`, '=', `g(${gString(biasedInput, thetas)})`, '=', `g(${gValue.toFixed(2)})`)

    const sigmoidValue = sigmoid(gValue)
    console.log(`g(${gValue.toFixed(2)}) = ${sigmoidValue.toFixed(4)}`)
    console.log(`Er is ${(sigmoidValue * 100).toFixed(2)}% kans dat (${input.join(', ')}) tot deze klasse behoort.`)
  }
}

/* UTILS */
function gString (input, thetas) {
  const items = []
  for (var i = 0; i < input.length; i++) {
    items.push([
      thetas[i],
      input[i]
    ].join(' x '))
  }
  return items.join(' + ')
}
