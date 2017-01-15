const { tableWithHeader } = require('../utils')
const { fitness, prepend } = require('./fitnessFunctie')

/* FUNCTIONS */
function fitnessRatio (input, all = []) {
  return ((fitness(input) / all.map(x => fitness(x)).reduce((total, curr) => total + curr, 0)) * 100).toFixed(2)
}

/* OUTPUT */
module.exports = {
  fitnessRatio: fitnessRatio,
  output: function output () {
    let items = []
    for (var i = 0; i < 15; i++) {
      const binary = prepend(i.toString(2), '0', 4)
      items.push(binary)
    }

    items = items.map(item => {
      return [
        'There is a',
        `${fitnessRatio(item, items)}%`,
        'chance that item',
        item,
        `(${fitness(item)})`,
        'is chosen'
      ]
    })

    console.log(tableWithHeader(items, ['', 'chance', '', 'binary', 'fitness', '']))
  }
}
