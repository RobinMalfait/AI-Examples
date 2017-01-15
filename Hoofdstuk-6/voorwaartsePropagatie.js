const { table } = require('../utils')

/* FUNCTIONS */
/**
 * X: de invoervector
 * theta: alle gewichten van het neuraal netwerk
 */
function voorwaartsePropagatie (x, thetas) {
  const title = '-- voorwaartse propagatie --'
  console.log([title, '-'.repeat(title.length)].join('\n'))

  const aantalLagen = thetas.length
  let a = x                                                // a^(l)

  for (var i = 0; i < aantalLagen; i++) {
    const subTitle = `Iteratie ${i + 1}`
    console.log(['', '-'.repeat(subTitle.length + 4), `| ${subTitle} |`, '-'.repeat(subTitle.length + 4)].join('\n'))

    console.log('\n 1. We voegen de bias toe aan de input:')
    const biasedInput = addBias(a)                          // ã^(l)
    console.log(table(biasedInput))

    console.log('\n 2. We berekenen z (matrix vector product):')
    const z = matrixVectorProduct(thetas[i], biasedInput)   // z^(l+1)
    console.log(table(z))

    console.log('\n 3. We berekenen g voor elke waarde in z:')
    a = z.map(value => g(value))                            // g(z^(l+1))
    console.log(table(a))
  }

  return a
}

function addBias (input) {
  return [1, ...input]
}

// Dit is de sigmoïd functie
function g (z) {
  return 1 / (1 + Math.pow(Math.E, z * -1))
}

function matrixVectorProduct (matrix, vector) {
  return matrix.reduce((output, row) => {
    const sum = row.map((cell, i) => cell * vector[i])
                   .reduce((total, curr) => total + curr, 0)
    output.push(sum)
    return output
  }, [])
}

function kost (output, desiredOutput) {
  return desiredOutput.map((y, i) => {
    const h0 = output[i]
    return y * ln(h0) + (1 - y) * ln(1 - h0)
  }).reduce((total, curr) => total + curr, 0) * -1
}

function ln (input) {
  return Math.log(input)
}

/* SETUP */
const x = [0.05, 0.1] // De Input
const y = [0, 1]      // De verwachte Output (label)
const Theta1 = [
  [0.35, 0.15, 0.2],
  [0.35, 0.25, 0.3]
]
const Theta2 = [
  [0.6, 0.4, 0.45],
  [0.6, 0.5, 0.55]
]

/* OUTPUT */
module.exports = {
  output: function output () {
    console.log('De invoer ziet er als volgt uit:')
    console.log(table(x))

    console.log('\nDe verwachte waarde (y) ziet er als volgt uit:')
    console.log(table(y))

    console.log('\nDe thetas voor invoer -> verborgen laag zien er als volgt uit:')
    console.log(table(Theta1))

    console.log('\nDe thetas voor de verborgen -> uitvoer laag zien er als volgt uit:')
    console.log(table(Theta2))
    console.log('')

    // ---------------------------------------------------------------------------------

    const uitvoerlaag = voorwaartsePropagatie(x, [Theta1, Theta2])

    console.log('\nNu kunnen we de uitvoer (a^(3)) vergelijken met de gewenste uitvoer (y).\nDe kost is:')
    console.log(table(kost(uitvoerlaag, y)))
  }
}
