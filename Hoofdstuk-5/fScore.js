const { recall } = require('./recall')
const { precisie } = require('./precisie')

/* FUNCTIONS */
/**
 * De FSCORE is de performantie van een hypothese in 1 enkel getal uitgedrukt.
 * Het maakt gebruik van zowel de recall als de precisie
 */
function fScore (precisie, recall) {
  return 2 * ((precisie * recall) / (precisie + recall))
}

/* SETUP */
/**
 * |          | y = 1 | y = 0 |
 * | -------- | ----- | ----- |
 * | h(x) = 1 |    12 |     8 |
 * | h(x) = 0 |     3 |    13 |
 */
const datagrid = [
  80, 8,
  0, 13
]
/* OUTPUT */
module.exports = {
  output: function output () {
    const a = datagrid[0]
    const b = datagrid[1]
    const c = datagrid[2]

    const recallValue = recall(a, c)
    const precisieValue = precisie(a, b)

    console.log(`Precisie = ${precisieValue}`)
    console.log(`Recall   = ${recallValue}`)
    console.log(`F-SCORE  = ${fScore(precisieValue, recallValue)}`)

    const algorithms = [[0.5, 0.4], [0.7, 0.1], [0.02, 1.0]]

    const algorithmsTable = algorithms.map(([precisie, rappel], i) => {
      return `Algorithm ${i + 1} | Precisie (${precisie.toFixed(3)}) | Rappel (${rappel.toFixed(3)}) | F-score: ${fScore(precisie, rappel).toFixed(3)}`
    }).join('\n')
    console.log('')
    console.log(['Opmerking 5.14 Pagina 8', '-'.repeat(23), algorithmsTable].join('\n'))
  }
}
