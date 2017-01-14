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
  12, 8,
  3, 13
]
/* OUTPUT */
module.exports = {
  output: function output () {
    const a = datagrid[0]
    const b = datagrid[1]
    const c = datagrid[2]

    const recallValue = recall(a, c)
    const precisieValue = precisie(a, b)

    console.log(fScore(precisieValue, recallValue))
  }
}
