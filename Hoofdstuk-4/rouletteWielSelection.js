const { table } = require('../utils')
const { fitness } = require('./fitnessFunctie')

/* SETUP */
const population = [
  '1100', '0100', '0001', '1110', '0111', '1001'
]

/* OUTPUT */
module.exports = {
  output: function output () {
    const items = []
    let total = 0
    population.forEach(value => {
      const fi = fitness(value)
      items.push(fi)
      total += fi
    })

    console.log(table(items))
    console.log(`\nTotale waarde voor de fitness wordt gegeven door:\n${items.join(' + ')} = ${total}\n`)

    console.log('Fitness ratio bepalen')
    console.log(table(items.map(item => `${(item / total * 100).toFixed(1)}%`)))
  }
}
