const { fitness, prepend } = require('./fitnessFunctie')

function fitnessRatio (input, all = []) {
  return ((fitness(input) / all.map(x => fitness(x)).reduce((total, curr) => total + curr)) * 100).toFixed(2)
}

module.exports = {
  output: function output () {
    var items = []
    for (var i = 0; i < 15; i++) {
      const binary = prepend(i.toString(2), '0', 4)
      items.push(binary)
    }

    items.forEach(item => {
      console.log(`There is a ${fitnessRatio(item, items)}% chance that item ${item} (${fitness(item)}) is chosen.`)
    })
  }
}
