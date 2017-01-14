/* FUNCTIONS */
function sigmoid (z) {
  return 1 / (1 + Math.pow(Math.E, z * -1))
}

/* OUTPUT */
module.exports = {
  sigmoid: sigmoid,
  output: function output () {
    const input = 0.123

    console.log('Input', input)
    console.log('Sigmoid', sigmoid(input))
  }
}
