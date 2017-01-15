/* FUNCTIONS */
function fitness (input) {
  // 15x - x^2
  let number = input
  if (typeof input === 'string') {
    number = parseInt(input, 2)
  }
  return 15 * number - square(number)
}

/* OUTPUT */
module.exports = {
  fitness: fitness,
  prepend: prepend,
  output: function output () {
    for (var i = 0; i < 15; i++) {
      const binary = prepend(i.toString(2), '0', 4)
      console.log(`Fitness function of ${binary} = ${fitness(binary)}`)
    }
  }
}

/* UTILS */
function square (input) {
  return Math.pow(input, 2)
}

function prepend (input, value, maxLength) {
  const longInput = `${value}`.repeat(maxLength) + input

  return longInput.substr(longInput.length - maxLength)
}
