/* FUNCTIONS */
function stap (z, threshold = 0, yes = 1, no = 0) {
  return z >= threshold ? yes : no
}

/* SETUP */
const input = [
  0.123,
  -0.355,
  8,
  1.2,
  -1.3,
  0.99
]

/* OUTPUT */
module.exports = {
  stap: stap,
  output: function output () {
    input.forEach((z) => console.log(`Input: ${z.toFixed(2)} - Stap function: ${stap(z)}`))
  }
}
