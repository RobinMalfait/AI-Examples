const Table = require('cli-table')
const { stap } = require('./stapFunctie')
const { g, addBias } = require('./eenVsAllen')

/* FUNCTIONS */
function gString (input) {
  const output = [input[0]]
  for (var i = 1; i < input.length; i++) {
    output.push(`${input[i]}*X${i}`)
  }
  return output.join(' + ')
}

/* SETUP */
const input = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1]
]

const perceptrons = [
  [-1, 2, 2],
  [3, -2, -2],
  [-3, 2, 2]
]

/* OUTPUT */
module.exports = {
  output: function output () {
    console.log('Input:')
    console.log(table(input))

    console.log('\nPerceptrons:')
    console.log(table(perceptrons))

    // Steps:
    console.log('\n1. Add bias to input variables')
    const biasedInput = input.map(value => addBias(value))
    console.log(table(biasedInput))

    console.log('\n2. Calculate Each Perceptron')
    const output = perceptrons.map(perceptron => {
      const gValues = biasedInput.map(input => g(input, perceptron))
      const hValues = gValues.map(g => stap(g))
      const output = []

      input.map((data, i) => {
        output.push([
          ...data,
          gValues[i],
          hValues[i]
        ])
      })

      return tableWithHeader(output, ['X1', 'X2', gString(perceptron), 'h(...)'])
    }).join('\n')
    console.log(output)

    console.log('\n3. Perceptrons laten samenwerken')
    const totalOutput = input.map(([x1, x2], i) => {
      const biasedInput = addBias([x1, x2])

      const perceptron1 = perceptrons[0]
      const perceptron2 = perceptrons[1]
      const perceptron3 = perceptrons[2]

      const p1Value = stap(g(biasedInput, perceptron1))
      const p2Value = stap(g(biasedInput, perceptron2))
      const p3Value = stap(g(addBias([p1Value, p2Value]), perceptron3))

      return [x1, x2, p1Value, p2Value, p3Value]
    })
    console.log(tableWithHeader(totalOutput, ['X1', 'X2', 'OR', 'NAND', 'AND(OR, NAND)']))
  }
}

/* UTILS */
function table (input, options = {}) {
  const table = new Table(options)
  table.push(...input)
  return table.toString()
}

function tableWithHeader (input, head) {
  return table(input, { head })
}
