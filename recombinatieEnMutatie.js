/* FUNCTIONS */
function eenpuntsCrossover (parent1, parent2) {
  const point = Math.floor(Math.random() * parent1.length)

  const [p11, p12] = splitValue(parent1, point)
  const [p21, p22] = splitValue(parent2, point)

  const child1 = `${p11}${p22}`
  const child2 = `${p21}${p12}`

  return {
    point,
    child1,
    child2
  }
}

/* SETUP */
const population = [
  ['1100', '0100'],
  ['0001', '1110'],
  ['0111', '1001']
]

/* OUTPUT */
module.exports = {
  output: function output () {
    console.log('1. éénpunts crossover')
    console.log(population.map(([parent1, parent2]) => {
      const { child1, child2 } = eenpuntsCrossover(parent1, parent2)
      return `[${parent1}, ${parent2}] => [${child1}, ${child2}]`
    }).join('\n'))
  }
}

/* UTILS */
function splitValue (value, index) {
  return [
    value.substring(0, index),
    value.substring(index)
  ]
}
